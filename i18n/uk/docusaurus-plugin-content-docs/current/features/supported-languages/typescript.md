# TypeScript

## Установлення підсвічування синтаксису

```vim
:TSInstall typescript
:TSInstall tsx
```

## Підтримувані мовні сервери

- angularls
- cssmodules_ls
- denols
- ember
- eslint
- glint
- rome
- stylelint_lsp
- tailwindcss
- tsserver

Only `tsserver` and `tailwindcss` is enabled by default and the other servers need to be [manually configured](/configuration/language-features/language-servers.md#manually-configured-servers).

### TypeScript standalone server (tsserver)

`tsserver` requires one of the following files/folders : `package.json`, [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) or `.git.` in the root directory of the project

See [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#tsserver) for more information about the tsserver language server configuration options.

## Підтримувані форматувальники коду

- deno_fmt
- dprint
- eslint
- eslint_d
- prettier
- prettier_d_slim
- prettierd
- rome
- rustywind

The configured formatter(s) must be installed separately.

## Підтримувані лінтери

- eslint
- eslint_d
- semgrep
- tsc
- xo

The configured linter(s) must be installed separately.
