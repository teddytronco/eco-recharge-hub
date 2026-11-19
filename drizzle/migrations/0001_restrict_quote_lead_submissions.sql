DROP POLICY IF EXISTS "Anyone can submit a quote lead" ON public.quote_leads;
CREATE POLICY "Visitors can submit valid quote leads" ON public.quote_leads
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(company) BETWEEN 1 AND 200
  AND char_length(contact_name) BETWEEN 1 AND 200
  AND char_length(email) <= 200
  AND char_length(phone) <= 60
  AND (email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' OR char_length(regexp_replace(phone, '[^0-9]', '', 'g')) >= 8)
  AND char_length(country) <= 120
  AND char_length(city) <= 120
  AND coalesce(char_length(role), 0) <= 200
  AND coalesce(char_length(chemistry), 0) <= 200
  AND coalesce(char_length(format), 0) <= 200
  AND coalesce(char_length(quantity), 0) <= 200
  AND coalesce(char_length(condition), 0) <= 200
  AND coalesce(char_length(frequency), 0) <= 200
  AND coalesce(char_length(pickup), 0) <= 200
  AND coalesce(char_length(notes), 0) <= 4000
  AND coalesce(char_length(source_page), 0) <= 500
  AND coalesce(lang, 'es') IN ('es', 'en')
  AND coalesce(array_length(file_names, 1), 0) <= 5
);