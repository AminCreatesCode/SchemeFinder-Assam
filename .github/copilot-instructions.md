# Copilot instructions for SchemeFinder Assam

- Read `PROJECT.md` before making implementation decisions. Treat it as the product source of truth.
- Build a working, demonstrable MVP. Do not generate the entire project in one giant change; work in small stages and verify each stage.
- Inspect the existing repository before editing. Preserve working code and avoid replacing files without a reason.
- Use Next.js App Router, TypeScript and Tailwind unless the existing project already uses a coherent alternative.
- Prefer simple, readable code over unnecessary packages, abstractions or infrastructure.
- Keep the eligibility engine deterministic and separate from AI. Never ask an LLM to decide whether a person is eligible.
- Model rule outcomes as `met`, `not_met` or `unknown`. Missing data must never count as a match.
- Do not invent scheme names, eligibility rules, benefits, deadlines, document requirements, application URLs, official endorsements or statistics.
- Every displayed scheme must show an official source URL and `lastVerifiedAt`. Mark uncertain or stale information clearly.
- The AI assistant must answer only from supplied scheme records/context, cite or link the relevant official source, and admit when information is unavailable.
- Do not expose AI API keys in client-side code. Read secrets only on the server from environment variables. Include placeholder variable names in `.env.example`, never real keys.
- Keep user profile and checklist data in browser localStorage for the MVP. Do not collect Aadhaar, bank details, OTPs, passwords or identity-document uploads.
- Use optional profile fields and request sensitive attributes only when needed for a relevant scheme.
- Make buttons and links functional. Include loading, empty, validation and error states.
- Use semantic HTML, accessible labels, keyboard-friendly controls and responsive layouts.
- Avoid fake testimonials, fake government logos, fabricated metrics and any wording implying government affiliation or approval.
- Add or update tests for eligibility logic and other important behavior. Run lint, type-check and tests where configured; fix errors before declaring a stage complete.
- At the end of each stage, report changed files, implemented behavior, checks run, known limitations and the next recommended stage.
