# Scala

## Install Syntax Highlighting

```vim
:TSInstall scala
```

## Install Language Server

To get scala LSP support working in Lunarvim, first you need to do the prerequisites listed here https://github.com/scalameta/nvim-metals#prerequisites.

Then use coursier to install the metals language server so that it is available on your PATH:

`cs install metals`

## Configure Lunarvim

Create a file called `~/.config/lvim/lua/user/metals.lua`:

```lua
local M = {}

M.config = function()
  local metals_config = require("metals").bare_config()
  metals_config.on_attach = require("lvim.lsp").common_on_attach
  metals_config.settings = {
    showImplicitArguments = false,
    showInferredType = true,
    excludedPackages = {},
  }
  metals_config.init_options.statusBarProvider = false
  require("metals").initialize_or_attach { metals_config }
end

return M
```

Add the following to your `config.lua`

```lua
lvim.plugins = {
    {
      "scalameta/nvim-metals",
      config = function()
        require("user.metals").config()
      end,
    },
}

lvim.autocommands.custom_groups = {
  { "FileType", "scala,sbt", "lua require('user.metals').config()" }
}
```

## Supported formatters

```lua
scala = { "scalafmt" }
```
