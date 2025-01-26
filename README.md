## TBAF example

An example/template IE mod project setup for [TBAF](https://forums.bgforge.net/viewtopic.php?t=448) usage in
[BGforge MLS](https://github.com/BGforgeNet/VScode-BGforge-MLS)

### Quickstart

If you want to just try TBAF:

1. Install [Node.js](https://nodejs.org/en/download).
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

### Usage in existing mods

No all these steps arent's strictly necessary for using TBAF, but you'll save yourself some headache by following them.

1. Install [Node.js](https://nodejs.org/en/download).
1. Install [pnpm](https://pnpm.io/installation).
1. Copy over [package.json](package.json). Edit `name` field.
1. Run `pnpm install` in mod directory. This installs npm packages specified in `package.json`.
1. Install VScode [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), copy
   over [eslint.config.mjs](eslint.config.mjs). That helps VScode to point out some errors in TS code.
1. Add `node_modules/`, `**/_tmp.tbaf.ts` to [.gitignore](.gitignore) - they don't need to be checked in.
1. Add `.tbaf` to [.gitattributes](.gitattributes) as shown, that will allow for proper highlighting on GitHub.
1. Add `**/_tmp.tbaf.ts` to VScode `files:exclude` list. (`CTRL-,` - `files:exclude`. Or, see
   [example](.vscode/settings.json)). This is just a temp file used in transpilation.
1. Create your first tbaf!
