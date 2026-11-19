<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep bilingual recruitment content in a shared careers content module and serve it through `/careers`; this keeps navigation and job information consistent.
- Careers applications use position-specific email links and the supplied job PDFs, not the customer lead form; this preserves the employer's stated CV workflow.
- Keep EV drive-unit copy and inquiry identifiers in a shared bilingual content module; reuse the existing lead fields so component inquiries follow the established contact workflow.
- The private leads dashboard lives at `/panel` under `_authenticated`; access is granted by the database allowlist + `user_roles` admin role, never by client checks. Site visits and contact taps are recorded anonymously by `SiteTracker` (skipped on preview hosts and private pages).
