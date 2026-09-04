CREATE TABLE public.quote_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  company text NOT NULL,
  contact_name text NOT NULL,
  role text,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  city text NOT NULL,
  chemistry text,
  format text,
  quantity text,
  condition text,
  frequency text,
  pickup text,
  notes text,
  urgent boolean NOT NULL DEFAULT false,
  file_names text[] NOT NULL DEFAULT '{}',
  source_page text,
  lang text
);

GRANT INSERT ON public.quote_leads TO anon;
GRANT SELECT, INSERT ON public.quote_leads TO authenticated;
GRANT ALL ON public.quote_leads TO service_role;

ALTER TABLE public.quote_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote lead"
ON public.quote_leads FOR INSERT TO anon, authenticated
WITH CHECK (true);
