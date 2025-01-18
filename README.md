## TBAF example

An example/template IE mod project setup for TBAF usage.

### Quickstart

If you want to just try TBAF:

1. Install [pnpm](https://pnpm.io/installation).
1. Clone and install dependencies:
   ```bash
   git clone https://github.com/BGforgeNet/tbaf-example.git
   cd tbaf-example
   pnpm i
   ```
1. Open [script.tbaf](script.tbaf) in VScode.
1. Use `CTLR-R`, or "BGforge MLS: compile" command from command menu.
1. Check out the resulting `script.baf`.


### Using in existing mod

No all these steps arent's strictly necessary for using TBAF, but you'll save yourself some headache by following them.

1. Install [pnpm](https://pnpm.io/installation).
1. Copy over [package.json](package.json). Edit `name` field.
1. Run `pnpm i`. This installs npm packages specified in `package.json`.
1. Copy over [eslint.config.mjs](eslint.config.mjs).
1. Install VScode [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
1. Add `node_modules/`, `**/_tmp.tbaf.ts` to your `.gitignore` (see [example](.gitignore)).
1. Add `**/_tmp.tbaf.ts` to VScode `files:exclude` list. (`CTRL-,` - `files:exclude`. Or, see
   [example](.vscode/settings.json)).
