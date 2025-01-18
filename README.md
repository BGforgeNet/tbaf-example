## TBAF example

An example/template IE mod project setup for TBAF usage.

These steps arent's strictly necessary for using TBAF, but you'll save yourself some headache by following them.

1. Install [pnpm](https://pnpm.io/installation).
1. Copy over `package.json`. Edit `name` field.
1. Run `pnpm i`, `pnpm i -D`. This installs npm packages specified in `package.json`.
1. Copy over `eslint.config.mjs`.
1. Install VScode [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
1. Add `node_modules/`, `**/_tmp.tbaf.ts` to your `.gitignore` (see [example](.gitignore)).
1. Add `**/_tmp.tbaf.ts` to VScode `files:exclude` list. (`CTRL-,` - `files:exclude`. Or, see [example](.vscode/settings.json)).

### Minimal setup

If you want to just try TBAF, the minimal setup is

1. Install [pnpm](https://pnpm.io/installation).
1. Run `pnpm add ielib`.
