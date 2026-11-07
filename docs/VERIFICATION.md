# Verification record

Version 2.0.0 — 2026-11-07

## Automated checks

18 Node domain tests exercise starter-template validation, dealership discovery → presentation mapping, changing trims, unmet needs, transparent match counts, empty calls, reset isolation, template exports excluding active-call details, ID-safe renaming and deletion, stale-call reconciliation, invalid imports, partial tiebacks, reason overrides, literal script substitution, summaries, and quantity/rate comparison arithmetic.

The standalone build is checked for valid embedded JavaScript and identical bytes between hosted and downloadable files. There are no runtime package dependencies or external resources.

## Browser checks performed

- Loaded the dealership example and navigated discovery questions.
- Unchecked and rechecked a need; the live selection count updated correctly.
- Viewed offer-specific presentation reasons, features, benefits, and the live call brief.
- Added a new category, question, and answer in the editor, mapped it to a vehicle feature and benefit, saved, selected it during discovery, and confirmed it appeared in the presentation.
- Reloaded and confirmed the customized template and call state persisted.
- Exported a JSON backup through the actual download control.
- Confirmed Clear call removed the sample customer while preserving the customized template.
- Imported the exported JSON through the file chooser and confirmed replacement, and verified the restored customized flow.

Final release verification also includes screenshots of the app’s actual configuration, discovery, and presentation views. Screenshots use fictional sample customers and vehicles.

- Checked the discovery workspace at a 390-pixel mobile viewport.

## Boundaries

The automation browser blocked file:// navigation. The standalone file is byte-identical to the tested locally served build, but an automated double-click/file-origin test was not completed.

These checks do not establish business outcomes, call-center adoption, vehicle availability, current provider pricing, or suitability for a regulated/customer-data environment. They are functional tests of the local app. Browser-local data is not encrypted by the app. File-origin storage and clipboard behavior vary by browser; JSON and text-file download fallbacks are provided.
