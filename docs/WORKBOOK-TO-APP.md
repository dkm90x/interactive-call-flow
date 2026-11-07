# From the workbook to the local app

## Source review

The read-only review covered both tabs of Interactive Call Flow 3.2 across their full existing grid bounds: 1,013 × 26 and 1,000 × 23. The returned populated cells contained 131 formulas and 37 validation rules. No original spreadsheet cells were edited. The private cell audit is deliberately excluded from this repository.

The workbook is a conversation aid with a configuration/data tab, not just a call log. Its intended mechanism is:

1. Open the call and capture the customer’s identity and request.
2. Select a call type to retrieve the appropriate agenda transition.
3. Select a discovery topic to retrieve a question and follow-up prompts.
4. Check relevant facts in categories including household, usage, video content, devices, and mobile.
5. Project those selections into offer-specific tieback columns.
6. Select the package/presentation and explain why its features meet the customer’s needs.
7. Use transitions to acknowledge whatever the customer raises and return to the next purposeful step.

## Observed behavior and implementation

| Original mechanism | Local app implementation |
| --- | --- |
| Customer/contact inputs | Name, agent, phone, reason, notes, and configurable extra fields |
| Call-type dropdown and IFS agenda lookup | Editable call types with individual agenda transition statements |
| Topic dropdown and question lookup | Editable categories, each with multiple discovery questions |
| Category checkboxes | Wants, likes, dislikes, and facts with stable identifiers |
| IF formulas expose checked details | Live brief retained across stages |
| Product-specific tieback columns | Each offer maps selected answer IDs to its own reason, feature, and benefit |
| Package dropdown | Offer/vehicle/trim selector with transparent matched-reason counts |
| “Because you… / gives you… / allows you…” structure | Explicit reason → feature → benefit cards and copyable spoken presentation |
| Mobile quantity/rate/cost/savings calculations | Optional configurable-basis cost comparison: unit price × quantity, then current minus proposed total |
| Reset action requested by the creator | Confirmed Clear call resets all call state, preserving template configuration |
| Supporting data tab | No-code configuration editor and portable JSON templates |

## Corrections rather than literal bug parity

Parts of the original are labeled under construction. One lookup produces an existing #N/A for unmatched selections. Several package/presentation formulas refer to blank supporting cells, and concatenated script fragments can produce incomplete or unspaced sentences. The app reconstructs the intended workflow rather than reproducing those defects.

The workbook’s current values are not evidence of real-world pricing, equipment, recommendations, or customer outcomes. Supplied app examples are newly authored fictional training data. The app does not embed old provider prices or copy private customer records.

The reset-button code and drawings were not available through the cell-data connector. Reset behavior is implemented from Jordan’s explicit requirement and tested independently.

## Generalizing the sales process

Configuration separates the process from its content. A category can be “Video content” for connectivity or “Seats & comfort” for a dealership. The question, selectable answer, product, feature, and benefit are editable independently. Relationships use stable IDs, so renaming does not break a tieback. Deleting an answer removes linked mappings; invalid imported configurations are rejected before replacing the active template.

Offer choice remains with the seller. A high match count is not a claim that a vehicle is available or that a recommendation is objectively best. Uncovered selected needs remain explicit in the presentation.
