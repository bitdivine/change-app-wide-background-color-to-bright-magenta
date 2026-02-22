# Specification

## Summary
**Goal:** Change the app-wide background/theme from bright cyan to bright magenta in both light and dark modes while keeping UI text and surfaces readable.

**Planned changes:**
- Update the global CSS theme tokens in `frontend/src/index.css` so `--background` uses bright magenta (replacing the current cyan) for light mode.
- Update the dark-mode theme tokens so `--background` uses a magenta-themed dark variant (replacing the current cyan) for dark mode.
- Adjust directly related surface/utility tokens (`--card`, `--popover`, `--border`, `--input`, `--ring`, and foreground/contrast-related tokens as needed) to maintain readable contrast against the new magenta background.

**User-visible outcome:** In both light and dark modes, the entire app background is magenta-themed (not cyan), and text/cards/popovers remain clearly readable.
