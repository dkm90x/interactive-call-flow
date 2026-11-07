# Why Interactive Call Flow works this way

> Written November 7, 2026. This is a retrospective explanation grounded in the current implementation and project records, not a contemporaneous decision log. It distinguishes the original need, the implemented behavior, and remaining limitations. Software implementation and current documentation were developed with AI assistance; the project direction and workflow requirements are Jordan McDonley’s.

## Problem and acceptance criteria

The original workbook was a conversation aid, not simply a tracker. Jordan’s process depends on agenda-setting, discovery, transitions, and explaining an offer in terms of what the customer said. A visually polished screen without those relationships fails the actual requirement.

Success means another business can replace every business-specific category, question, answer, transition, and offer; select real customer needs; see only the chosen offer’s configured reasons, features, and benefits; and clear a call without losing its process.

## Decisions and alternatives

| Decision | Alternative considered | Why this implementation fits | Cost / limit |
| --- | --- | --- | --- |
| Self-contained HTML, CSS, and JavaScript | Native installer or hosted account-based application | A seller can try the complete app or download one file without a development environment or account. Hosted and downloaded builds use identical code. | Browser storage and file-origin policies differ. No cross-device sync or native installer. |
| Explicit stages with persistent live brief | One long script or separate disconnected forms | The current task stays focused while captured needs remain visible. | A seller still decides how to navigate a real conversation. |
| Separate template from call state | Store everything in one document | Clear call can remove customer details while preserving configuration; template backups exclude the active call. | Text manually placed into a template is included in its backup. |
| Stable answer IDs for mappings | Match answers by their displayed text | Renaming a category or answer does not silently break its product relationship. Deletion reconciles references. | IDs and imported configuration need validation. |
| Offer-specific reason → feature → benefit mappings | Generic generated benefits or keyword matching | An answer means something different for different products. Explicit mappings make the sales reasoning inspectable. | A business must author and verify its mappings. No inventory, eligibility, or specification verification. |
| Uncovered-needs list and explained match counts | Automatically pick a “best” offer | A count helps compare configured coverage without disguising a missing benefit or assuming all needs have equal weight. | Counts are not suitability scores or an optimization model. |
| Category-scoped editors | A single page containing every question and mapping | A flow can grow without forcing users to scroll through the entire configuration for one change. | More navigation between editing sections. |
| Reusable transitions alongside stage transitions | One scripted line per stage only | A tangent can happen anywhere; acknowledging it and returning to the process is part of Jordan’s original sales method. | Statements remain aids, not a rigid call-control policy. |
| Deterministic local logic | An LLM generating recommendations on each call | This workflow can function offline with no API cost, latency, or transmission of call details. Relationships remain testable. | No automated transcription, conversational interpretation, or generative product advice. |

## A concrete data path

1. Configure the “Seats & comfort” category and a question about current seats.
2. Create an answer such as “Wants heated seats.” Its ID stays stable when its label changes.
3. Map that answer on a particular offer to “heated front seats” and “warm up on cold mornings.”
4. Select the answer during discovery. The call stores its ID, not a copied product claim.
5. Choose an offer. The presentation resolves selected IDs against that offer’s mappings.
6. A selected answer without both a feature and benefit remains uncovered rather than producing an invented promise.

## Failure modes addressed

- Renaming content breaks relationships → stable IDs and reconciliation tests.
- Reset destroys a company’s setup → independent call/template state and reset-isolation test.
- A screenshot implies functionality the app lacks → actual workflow screenshots plus custom-question-to-presentation browser check.
- Old company-specific data becomes public product advice → newly authored fictional examples; original workbook excluded.
- Local storage is unavailable → visible warning and export fallback; browser persistence is not guaranteed in every mode.

## Evidence and authorship

Jordan designed and implemented the original spreadsheet workflow before using AI-assisted coding. The current app is an AI-assisted reconstruction of that process. Source review covered both workbook tabs, including 131 populated formula cells and 37 validation rules. It also identified unfinished areas; the rebuild implements the intended interaction rather than reproducing spreadsheet defects.

See [workbook mapping](WORKBOOK-TO-APP.md), [verification](VERIFICATION.md), [tests](../test/core.test.mjs), and [core logic](../src/core.js). Eighteen domain tests and recorded browser workflow checks support functional claims; they do not establish sales lift, adoption, or enterprise deployment readiness.

## What would change the architecture

Multiple simultaneous agents, shared templates, access control, audit trails, and managed customer-data retention would justify a service and account model. They are intentionally outside this local app. A team deployment should begin with those requirements rather than treating local browser storage as a CRM.
