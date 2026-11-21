# SchemeFinder Assam — Product Brief (PS07)

> **Tagline:** Find the support you may qualify for. Know exactly what to do next.
>
> **Hackathon problem statement:** PS07 — SchemeFinder: Government Scheme Discovery Platform
>
> **Product focus:** An Assam-first, evidence-backed government scheme discovery and application-readiness assistant.

## 1. Product vision

Many people do not know which government schemes may apply to them, what the eligibility conditions mean, which documents they need, or where to apply. SchemeFinder Assam helps a person create a simple profile, discover potentially relevant Central and Assam government schemes, understand the matching conditions, prepare a document checklist, and navigate to the official source/application portal.

This is **not** an attempt to clone an existing national scheme directory. The MVP should stand out through:

- Assam-first discovery and locally relevant official sources.
- Transparent, explainable eligibility matching.
- Clear handling of missing or uncertain information.
- Personalised document-readiness checklists and next steps.
- AI assistance grounded in the scheme records and their official sources.

## 2. Target users and MVP scope

### Primary MVP users

- College/university students in Assam.
- Young people seeking skill-development or entrepreneurship support.
- Applicants who need help understanding eligibility and application steps.

### Secondary users (future scope)

Farmers, women, people with disabilities, minority communities, and other beneficiary groups. Do not pretend the MVP comprehensively covers every group or every scheme.

### Geography

Start with Assam. Include selected Central Government schemes where their eligibility is relevant to Assam residents. Design the data model so other North-Eastern states can be added later.

## 3. Core user journey

1. User lands on the homepage and chooses **Find schemes for me**.
2. User fills a short profile: state, age range or age, education level, student/employment status, annual family-income band, and other optional attributes only when needed for a scheme (for example, gender, social category, disability status, or community-specific eligibility).
3. The application evaluates the profile against structured scheme rules.
4. Results are grouped into:
   - **Likely match:** all required, machine-checkable conditions in the curated record are satisfied.
   - **Check a few details:** one or more required answers are missing or a condition needs manual confirmation.
   - **Does not appear to match:** at least one explicit condition is not satisfied.
5. User opens a scheme detail page and sees benefits, eligibility conditions, why it matched, what is still unknown, documents, application steps, official links, source and last-verified date.
6. User asks the AI assistant a question such as: “Why did this scheme match me?” or “What should I prepare before applying?”
7. User creates or views a checklist and opens the official application/source page.

## 4. MVP features (build these first)

### P0 — Essential

- Responsive landing page with a clear value proposition and primary CTA.
- Profile form with validation and a progress indicator.
- Scheme catalogue with search, category filters and state filters.
- Deterministic eligibility engine using structured rules, not an LLM decision.
- Results page with match status and plain-language reasons.
- Scheme detail page with benefits, eligibility, required documents, steps, official source URL and last-verified date.
- Document checklist that users can tick off. Persist locally for the demo.
- Clear empty, loading and error states.
- A demo profile / “Try sample profile” action so judges can test quickly.

### P1 — High-value differentiators

- AI assistant that answers questions using only the curated scheme data and official-source text supplied to it.
- “Explain my match” action that explains each passed, failed or unknown condition.
- Application-readiness summary: completed documents, missing documents, and next steps.
- Source freshness label: verified date and a warning when a record is overdue for review.
- Natural-language search, such as “scholarships for postgraduate students in Assam”.

### P2 — Only if the core is stable

- Assamese language interface or bilingual explanations.
- Save multiple profiles locally.
- Compare two schemes.
- Add more beneficiary groups or North-Eastern states.

Do not start P2 until P0 works end-to-end.

## 5. Innovation and responsible AI design

### Eligibility engine

Every scheme must have structured, human-reviewable rules. The rule engine should return a condition-by-condition result:

- `met`: user-provided value satisfies the rule.
- `not_met`: user-provided value conflicts with an explicit rule.
- `unknown`: the profile does not contain enough information, or the scheme wording needs manual review.

Overall status:

- `likely_match` only when every required rule is `met`.
- `needs_more_information` when no rule is `not_met`, but at least one required rule is `unknown`.
- `unlikely_match` when at least one required rule is `not_met`.

Never convert `unknown` into `met`. Never claim that the platform guarantees approval. Always explain that the competent department makes the final eligibility decision.

### AI assistant

Use AI for:

- Understanding a natural-language query and mapping it to supported search filters.
- Explaining official scheme information in simpler language.
- Summarising the user's match results and document checklist.
- Answering questions based on retrieved scheme records only.

Do **not** use AI as the source of truth for eligibility, benefit amounts, deadlines, documents, or application status. Do not let it invent scheme names, official links, or rules. When the provided records do not contain the answer, it must say that the information is not available and direct the user to the official source.

Show a source link beside factual scheme answers. Clearly label AI-generated explanations.

### Privacy

- Collect only fields required for discovery.
- Make sensitive profile attributes optional until they are needed for a relevant scheme.
- For the hackathon MVP, keep profile and checklist data in browser local storage; do not upload personal profile data to a database.
- Do not request Aadhaar number, bank details, passwords, OTPs, or document uploads.
- Provide a visible **Clear my profile** action.
- If an external AI API is configured, send only the minimum necessary context. Do not send identity details.

## 6. Scheme data quality and source policy

Start with a small curated dataset (approximately 8–12 records) rather than a large unverified catalogue. Each record must include:

- Scheme name and short plain-language summary.
- Implementing department and jurisdiction (`Assam` or `Central`).
- Beneficiary/category tags.
- Structured eligibility rules with field, operator, value and whether the rule is mandatory.
- Benefits, required documents and application steps, where verified.
- Official source URL and official application URL (if confirmed).
- `lastVerifiedAt` date and a data-confidence/review note.
- Scheme status: `active`, `closed`, `seasonal`, or `unknown` only when supported by a current official source.

Do not infer current application windows from old pages or PDFs. If a deadline or current status cannot be confirmed, show **Check official portal** or **Status not verified**, not a guessed date.

Useful official starting points for manual verification:

- National scheme discovery portal: https://www.myscheme.gov.in/
- Assam Directorate of Higher Education scholarship page: https://directorateofhighereducation.assam.gov.in/portlets/scholarships
- Assam Welfare of Minorities & Development scholarship page: https://minorities.assam.gov.in/portlets/scholarships
- Assam Tea Tribes & Adivasi Welfare SIRISH portal notices: https://ttwd.assam.gov.in/
- Assam Social Justice & Empowerment department: https://socialjustice.assam.gov.in/
- Assam Skill Development Mission: https://asdm.assam.gov.in/

These are starting points, not proof that every linked scheme is currently open. Verify each individual scheme's latest criteria, dates and application URL before putting it in the demo dataset.

## 7. Suggested technology stack

Use a simple stack that can be finished and demonstrated reliably:

- **Next.js with App Router**
- **TypeScript**
- **Tailwind CSS**
- **Lucide icons**
- **Local TypeScript/JSON scheme dataset** for the hackathon MVP
- **Browser localStorage** for the temporary profile and checklist
- **Server-side API route** for optional AI integration

Do not add a database, authentication, vector database, scraping pipeline, or complex admin panel unless the working MVP is already complete. Avoid exposing API keys in client-side code. Keep secrets in `.env.local` and provide `.env.example` with placeholder names only.

If no AI API key is available, the site must still work: provide rule-based search, eligibility explanations and a clearly labelled fallback assistant. The AI integration should be provider-agnostic where practical.

## 8. Suggested information architecture

- `/` — Landing page
- `/find` — Profile questionnaire
- `/results` — Personalised matching results
- `/schemes` — Browse/search/filter catalogue
- `/schemes/[slug]` — Scheme details, reasons, documents and next steps
- `/assistant` — AI scheme assistant (or a reusable assistant panel)
- `/about` — Scope, data sources, limitations and disclaimer

## 9. Suggested project structure

```text
src/
  app/
    page.tsx
    find/page.tsx
    results/page.tsx
    schemes/page.tsx
    schemes/[slug]/page.tsx
    assistant/page.tsx
    about/page.tsx
    api/assistant/route.ts
  components/
    layout/
    profile/
    schemes/
    eligibility/
    assistant/
    ui/
  data/
    schemes.ts
  lib/
    eligibility.ts
    scheme-search.ts
    storage.ts
    ai/
      prompts.ts
      provider.ts
  types/
    scheme.ts
    profile.ts
```

Copilot may adapt this structure if the current project already has a good structure. Do not duplicate files or introduce unnecessary abstractions.

## 10. Data model sketch

A scheme record should be strongly typed. Example shape (illustrative only; do not use these placeholder values as real scheme rules):

```ts
 type Scheme = {
   id: string;
   slug: string;
   name: string;
   summary: string;
   jurisdiction: "Assam" | "Central";
   department: string;
   categories: string[];
   benefits: string[];
   eligibilityRules: Array<{
     id: string;
     field: string;
     operator: "equals" | "in" | "gte" | "lte" | "between";
     value: string | number | string[] | [number, number];
     required: boolean;
     explanation: string;
   }>;
   documents: Array<{ name: string; required: boolean; note?: string }>;
   applicationSteps: string[];
   officialSourceUrl: string;
   applicationUrl?: string;
   lastVerifiedAt: string;
   status: "active" | "closed" | "seasonal" | "unknown";
   verificationNote: string;
 };
```

The user profile must use optional fields where appropriate. Avoid assuming that every scheme requires every profile attribute.

## 11. Design direction

Create a polished, trustworthy civic-tech product, not a generic chatbot landing page.

- Clean, modern, calm visual design.
- Strong typography, generous spacing and clear hierarchy.
- Use a restrained palette (deep navy/indigo with teal or green accents and warm neutral backgrounds).
- Display match status with text labels and icons; do not rely on colour alone.
- Scheme cards should make jurisdiction, category, match status and source freshness easy to scan.
- Include a visible official-source link and last-verified date on detail pages.
- Mobile-first responsive layout; test small screens.
- Avoid fake testimonials, fake government logos, fabricated statistics, and claims of government affiliation or endorsement.

## 12. Demo scenario for judges

Use a clearly labelled fictional/sample profile, not a real person's personal data. Example:

- State: Assam
- Age: 22
- Education: Undergraduate / pursuing postgraduate study (choose one consistent profile in the actual demo)
- Employment: Student
- Income: Select a band only if a verified scheme rule needs it

Demo flow:

1. Start with the sample profile.
2. Show the matched scheme list.
3. Open one scheme and walk through each eligibility condition, including an `unknown` condition if applicable.
4. Ask the assistant: “Why was this scheme recommended, and what should I prepare?”
5. Show the generated document checklist and official application/source link.
6. Explain how the platform prevents unsupported claims: structured rules, official links, source dates and `unknown` states.

The demo must not claim that a scheme is accepting applications unless the status has been checked against a current official notice.

## 13. Definition of done

The MVP is ready only when:

- The app starts locally using documented commands.
- A judge can complete the sample-profile flow without signing in.
- Search and filters work.
- At least 8 curated scheme records have official sources and review dates.
- Eligibility outcomes and per-rule explanations are deterministic and covered by tests.
- Unknown/missing information is displayed honestly.
- Scheme detail pages show source links, documents and next steps.
- Checklist state survives page refresh in the same browser.
- AI assistant works with a configured key OR the fallback is clearly labelled and useful.
- No API key is committed to Git or exposed to the browser.
- No dead buttons, broken routes, fake links or fabricated data remain.
- Mobile layout is usable.

## 14. Build order

Build in this order and verify each stage before moving on:

1. Inspect the repository and report its current state. Do not overwrite existing work.
2. Scaffold the app and create the visual shell/navigation.
3. Add typed scheme/profile models and a small verified seed dataset.
4. Implement and test the deterministic eligibility engine.
5. Build the profile form, results page, catalogue and scheme details.
6. Add the document checklist and local persistence.
7. Add AI assistant grounded in scheme data, with a safe fallback.
8. Run the app, test the full judge demo, fix issues and write a concise README.

**Important:** Work one stage at a time. Before making broad changes, explain the files you intend to create or modify. After each stage, run the available checks and summarise what works and what remains.
