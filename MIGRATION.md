# moonstone — ESM conversion, stopped and parked

**This branch is incomplete and is not being finished.** Moonstone is the
TV widget set, and the scope of this work was narrowed to phone-targeted
packages. It is left here rather than deleted because the JavaScript conversion
is done and correct as far as it goes, and throwing it away would cost more than
keeping it.

Upstream describes it as *"Moonstone UI library for TV user interfaces"*, and its
own README says the components are *"specially designed and optimized for use in
TV-based applications"*. Thirty files under `src/` mention TV; one handles LG's
Magic Remote.

## What is done

- `src/` and `index.js` are fully ES modules: 106 modules, 669 requires, no
  `require` or `module.exports` left, every file parses as a module.
- The import graph is acyclic — 107 modules, 278 static imports
  (`node test-esm/check-cycles.mjs`).
- Cross-package specifiers are resolved against the real checkouts, so directory
  mains are exact: `enyo/Control` → `enyo/src/Control/Control.js`,
  `layout/Panels` → `layout/src/Panels/Panels.js`, `enyo-ilib/DateFmt` →
  `enyo-ilib/ilib/lib/DateFmt.js`. `spotlight` and `enyo-ilib` stay bare for an
  import map.
- The 96 `require('moonstone');` statements became `import '../index.js';` rather
  than being dropped, because moonstone's `index.js` is not inert: it imports
  enyo-ilib for locale assets and calls `gesture.drag.configureHoldPulse` to
  widen the hold window for TV input devices.
- Two duplicate top-level bindings were fixed — `ProgressBar` imported `Control`
  twice, and `Table` imported `Table`/`TableRow`/`TableCell` from enyo and then
  declared kinds of the same names. Legal `var` redeclaration in CommonJS, a
  SyntaxError in ESM. Both found by syntax-checking every file.

## What is not done

- **The 79 `.less` files are not compiled.** Nothing in this branch produces
  CSS, so the widgets would render unstyled.
- **No test harness, and it has never been loaded in a browser.** Nothing here
  has been verified beyond static checks.
- **It depends on `spotlight`, which is also TV and also not converted**, so it
  could not run even with styles. `moonstone-extra` is untouched.

Anyone resuming this should read the `MIGRATION.md` in
[enyo](https://github.com/drahgon55/enyo/tree/esm),
[onyx](https://github.com/drahgon55/onyx/tree/esm) and
[enyo-ilib](https://github.com/drahgon55/enyo-ilib/tree/esm) first — the recipe,
the traps, and the testing discipline are all written up there.
