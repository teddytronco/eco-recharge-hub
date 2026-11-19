CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.dashboard_access_emails (
  email text PRIMARY KEY CHECK (email = lower(email)),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.dashboard_access_emails TO service_role;
ALTER TABLE public.dashboard_access_emails ENABLE ROW LEVEL SECURITY;
INSERT INTO public.dashboard_access_emails (email) VALUES ('crecio@xd-global.com');

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

CREATE OR REPLACE FUNCTION public.grant_dashboard_access()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.email_confirmed_at IS NOT NULL
     AND EXISTS (SELECT 1 FROM public.dashboard_access_emails WHERE email = lower(NEW.email)) THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin') ON CONFLICT DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.grant_dashboard_access() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER on_auth_user_dashboard_access
AFTER INSERT OR UPDATE OF email_confirmed_at, email ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_dashboard_access();

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin' FROM auth.users
WHERE email_confirmed_at IS NOT NULL AND lower(email) IN (SELECT email FROM public.dashboard_access_emails)
ON CONFLICT DO NOTHING;

CREATE POLICY "Admins can view quote leads" ON public.quote_leads FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
GRANT SELECT ON public.quote_leads TO authenticated;

CREATE TABLE public.site_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  session_id text NOT NULL,
  path text NOT NULL,
  referrer_host text,
  device text,
  lang text
);
CREATE INDEX site_visits_created_at_idx ON public.site_visits (created_at);
GRANT INSERT ON public.site_visits TO anon, authenticated;
GRANT SELECT ON public.site_visits TO authenticated;
GRANT ALL ON public.site_visits TO service_role;
ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can record valid visits" ON public.site_visits FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(session_id) BETWEEN 8 AND 64 AND char_length(path) BETWEEN 1 AND 300
  AND coalesce(char_length(referrer_host), 0) <= 200
  AND coalesce(device, 'desktop') IN ('desktop', 'mobile', 'tablet')
  AND coalesce(lang, 'es') IN ('es', 'en')
);
CREATE POLICY "Admins can view visits" ON public.site_visits FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.contact_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  session_id text NOT NULL,
  channel text NOT NULL,
  path text NOT NULL,
  lang text
);
CREATE INDEX contact_clicks_created_at_idx ON public.contact_clicks (created_at);
GRANT INSERT ON public.contact_clicks TO anon, authenticated;
GRANT SELECT ON public.contact_clicks TO authenticated;
GRANT ALL ON public.contact_clicks TO service_role;
ALTER TABLE public.contact_clicks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can record valid contact taps" ON public.contact_clicks FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(session_id) BETWEEN 8 AND 64 AND channel IN ('whatsapp', 'phone', 'email')
  AND char_length(path) BETWEEN 1 AND 300 AND coalesce(lang, 'es') IN ('es', 'en')
);
CREATE POLICY "Admins can view contact taps" ON public.contact_clicks FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));