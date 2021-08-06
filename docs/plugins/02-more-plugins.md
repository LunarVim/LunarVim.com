# More Plugins

Every plugin that works with Neovim works with LunarVim, here are some examples to get you started.

## Navigation plugins

### [nvim-spectre](https://github.com/windwp/nvim-spectre)

**search and replace**

```lua
{
  "windwp/nvim-spectre",
  event = "BufRead",
  config = function()
    require("spectre").setup()
  end,
},
```

### [snap](https://github.com/camspiers/snap)

**fast finder system**

```lua
{
  "camspiers/snap",
  rocks = "fzy",
  config = function()
    local snap = require "snap"
    local layout = snap.get("layout").bottom
    local file = snap.config.file:with { consumer = "fzy", layout = layout }
    local vimgrep = snap.config.vimgrep:with { layout = layout }
    snap.register.command("find_files", file { producer = "ripgrep.file" })
    snap.register.command("buffers", file { producer = "vim.buffer" })
    snap.register.command("oldfiles", file { producer = "vim.oldfile" })
    snap.register.command("live_grep", vimgrep {})
  end,
},
```

### [lightspeed](https://github.com/ggandor/lightspeed.nvim)

**jetpack codebase navigation**

```lua
{
  "ggandor/lightspeed.nvim",
  event = "BufRead",
},
```

### [hop](https://github.com/phaazon/hop.nvim)

**neovim motions on speed!**

```lua
{
  "phaazon/hop.nvim",
  event = "BufRead",
  config = function()
    require("hop").setup()
    vim.api.nvim_set_keymap("n", "s", ":HopChar2<cr>", { silent = true })
    vim.api.nvim_set_keymap("n", "S", ":HopWord<cr>", { silent = true })
  end,
},
```

### [nvim-bqf](https://github.com/kevinhwang91/nvim-bqf)

**better quickfix window**

```lua
{
  "kevinhwang91/nvim-bqf",
  event = { "BufRead", "BufNew" },
  config = function()
  require("bqf").setup({
          auto_enable = true,
          preview = {
          win_height = 12,
          win_vheight = 12,
          delay_syntax = 80,
          border_chars = { "┃", "┃", "━", "━", "┏", "┓", "┗", "┛", "█" },
          },
          func_map = {
          vsplit = "",
          ptogglemode = "z,",
          stoggleup = "",
          },
          filter = {
          fzf = {
          action_for = { ["ctrl-s"] = "split" },
          extra_opts = { "--bind", "ctrl-o:toggle-all", "--prompt", "> " },
          },
          },
          })
  end,
},
```

### [vim-matchup](https://github.com/andymass/vim-matchup)

**navigate and highlight matching words**

``` lua
{
  "andymass/vim-matchup",
  event = "CursorMoved",
  config = function()
    vim.g.matchup_matchparen_offscreen = { method = "popup" }
  end,
},
```

### [rnvimr](kevinhwang91/rnvimr)

**ranger file explorer window**

```lua
{
  "kevinhwang91/rnvimr",
    cmd = "RnvimrToggle",
    config = function()
      vim.g.rnvimr_draw_border = 1
      vim.g.rnvimr_pick_enable = 1
      vim.g.rnvimr_bw_enable = 1
      end,
},
```

### numb.nvim

**jump to the line**

```lua
{
  "nacro90/numb.nvim",
  event = "BufRead",
  config = function()
  require("numb").setup {
    show_numbers = true, -- Enable 'number' for the window while peeking
    show_cursorline = true, -- Enable 'cursorline' for the window while peeking
  }
  end,
},
```

### [minimap](https://github.com/wfxr/minimap.vim)

**blazing fast minimap/scrollbar written in Rust**

```lua
{
  'wfxr/minimap.vim',
  run = "cargo install --locked code-minimap",
  -- cmd = {"Minimap", "MinimapClose", "MinimapToggle", "MinimapRefresh", "MinimapUpdateHighlight"},
  config = function ()
    vim.cmd ("let g:minimap_width = 10")
    vim.cmd ("let g:minimap_auto_start = 1")
    vim.cmd ("let g:minimap_auto_start_win_enter = 1")
  end,
},
```

## Git

### gitlinker.nvim

```lua
{
  "ruifm/gitlinker.nvim",
  event = "BufRead",
  config = function()
  require("gitlinker").setup {
        opts = {
          -- remote = 'github', -- force the use of a specific remote
            -- adds current line nr in the url for normal mode
            add_current_line_on_normal_mode = true,
          -- callback for what to do with the url
            action_callback = require("gitlinker.actions").open_in_browser,
          -- print the url after performing the action
            print_url = false,
          -- mapping to call url generation
            mappings = "<leader>gy",
        },
      }
  end,
  requires = "nvim-lua/plenary.nvim",
},
```

### octo.nvim

```lua
{
  "pwntester/octo.nvim",
  event = "BufRead",
},
```

### vim-gist

```lua
{
  "mattn/vim-gist",
  event = "BufRead",
  requires = "mattn/webapi-vim",
},
```

### git-blame.nvim

``` lua
{
  "f-person/git-blame.nvim",
  event = "BufRead",
  config = function()
    vim.cmd "highlight default link gitblame SpecialComment"
    vim.g.gitblame_enabled = 0
  end,
},
```

### diffview.nvim

```lua
{
  "sindrets/diffview.nvim",
  event = "BufRead",
},
```

### vim-fugitive

```lua
{
  "tpope/vim-fugitive",
  cmd = {
    "G",
    "Git",
    "Gdiffsplit",
    "Gread",
    "Gwrite",
    "Ggrep",
    "GMove",
    "GDelete",
    "GBrowse",
    "GRemove",
    "GRename",
    "Glgrep",
    "Gedit"
  },
  ft = {"fugitive"}
},
```

## Treesitter

### playground

```lua
{
  "nvim-treesitter/playground",
  event = "BufRead",
},
```

### nvim-ts-autotag

```lua
{
  "windwp/nvim-ts-autotag",
  event = "InsertEnter",
},
```

### nvim-ts-rainbow

```lua
{
  "p00f/nvim-ts-rainbow",
},
```

### nvim-ts-context-commentstring

```lua
{
  "JoosepAlviste/nvim-ts-context-commentstring",
  event = "BufRead",
},
```

## Telescope Extensions

### telescope-fzy-native.nvim

```lua
{
  "nvim-telescope/telescope-fzy-native.nvim",
  run = "make",
  event = "BufRead",
},
```

### telescope-project

```lua
{
  "nvim-telescope/telescope-project.nvim",
  event = "BufWinEnter",
  setup = function()
    vim.cmd [[packadd telescope.nvim]]
  end,
},
```

## Colorschemes

### lsp-colors

``` lua
{
  "folke/lsp-colors.nvim",
  event = "BufRead",
},
```
### lush.nvim

``` lua
{
  "rktjmp/lush.nvim",
},
```

### nvim-colorizer

```lua
{
  "norcalli/nvim-colorizer.lua",
    config = function()
      require("colorizer").setup({ "*" }, {
          RGB = true, -- #RGB hex codes
          RRGGBB = true, -- #RRGGBB hex codes
          RRGGBBAA = true, -- #RRGGBBAA hex codes
          rgb_fn = true, -- CSS rgb() and rgba() functions
          hsl_fn = true, -- CSS hsl() and hsla() functions
          css = true, -- Enable all CSS features: rgb_fn, hsl_fn, names, RGB, RRGGBB
          css_fn = true, -- Enable all CSS *functions*: rgb_fn, hsl_fn
          })
  end,
},
```

## LSP Enhancement

### [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim)

**hint when you type**

``` lua
{
  "ray-x/lsp_signature.nvim",
  event = {"InsertEnter"},
  config = function()
    require "lsp_signature".setup()
  end
},
```
Attach it in your `config.lua`

```lua
lvim.lsp.on_attach_callback = function(client, bufnr)
  require("lsp_signature").on_attach()
end

```

### [lsp-rooter](https://github.com/ahmedkhalf/lsp-rooter.nvim)

**cwd to the project's root directory**

```lua
{
  "ahmedkhalf/lsp-rooter.nvim",
  event = "BufRead",
  config = function()
    require("lsp-rooter").setup()
  end,
},
```

### [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim)

**a tree like view for symbols**

```lua
{
  "simrat39/symbols-outline.nvim",
  cmd = "SymbolsOutline",
},
```

### [trouble.nvim](https://github.com/folke/trouble.nvim)

**diagnostics, references, telescope results, quickfix and location lists**

```lua
{
  "folke/trouble.nvim",
    cmd = "TroubleToggle",
},
```

Also define keybindings in `config.lua`

```lua
lvim.builtin.which_key.mappings["t"] = {
  name = "Diagnostics",
  t = { "<cmd>TroubleToggle<cr>", "trouble" },
  w = { "<cmd>TroubleToggle lsp_workspace_diagnostics<cr>", "workspace" },
  d = { "<cmd>TroubleToggle lsp_document_diagnostics<cr>", "document" },
  q = { "<cmd>TroubleToggle quickfix<cr>", "quickfix" },
  l = { "<cmd>TroubleToggle loclist<cr>", "loclist" },
  r = { "<cmd>TroubleToggle lsp_references<cr>", "references" },
},
```

### [goto-preview](https://github.com/rmagatti/goto-preview)

**previewing goto definition calls**

```lua
{
  "rmagatti/goto-preview",
  config = function()
  require('goto-preview').setup {
        width = 120; -- Width of the floating window
        height = 25; -- Height of the floating window
        default_mappings = false; -- Bind default mappings
        debug = false; -- Print debug information
        opacity = nil; -- 0-100 opacity level of the floating window where 100 is fully transparent.
        post_open_hook = nil -- A function taking two arguments, a buffer and a window to be ran as a hook.
        -- You can use "default_mappings = true" setup option
        -- Or explicitly set keybindings
        -- vim.cmd("nnoremap gpd <cmd>lua require('goto-preview').goto_preview_definition()<CR>")
        -- vim.cmd("nnoremap gpi <cmd>lua require('goto-preview').goto_preview_implementation()<CR>")
        -- vim.cmd("nnoremap gP <cmd>lua require('goto-preview').close_all_win()<CR>")
    }
  end
},
```

### [compe-tabnine](https://github.com/tzachar/compe-tabnine)

**TabNine completion engine for hrsh7th/nvim-compe**

```lua
{
  "tzachar/compe-tabnine",
  run = "./install.sh",
  requires = "hrsh7th/nvim-compe",
  event = "InsertEnter",
},
```

## General

### nvim-lastplace

**pick up where you left off**

```lua
	{
		"ethanholz/nvim-lastplace",
		event = "BufRead",
		config = function()
			require("nvim-lastplace").setup({
				lastplace_ignore_buftype = { "quickfix", "nofile", "help" },
				lastplace_ignore_filetype = {
					"gitcommit", "gitrebase", "svn", "hgcommit",
				},
				lastplace_open_folds = true,
			})
		end,
	},
```

### [persistence](https://github.com/folke/persistence.nvim)

**simple session management**

```lua
{
  "folke/persistence.nvim",
    event = "VimEnter",
    module = "persistence",
    config = function()
      require("persistence").setup {
        dir = vim.fn.expand(vim.fn.stdpath "config" .. "/session/"),
        options = { "buffers", "curdir", "tabpages", "winsize" },
      }
  end,
},
```

Also define keybindings in your `config.lua`

```lua
  lvim.builtin.which_key.mappings["Q"]= {
    name = "+Quit",
    s = { "<cmd>lua require('persistence').load()<cr>", "Restore for current dir" },
    l = { "<cmd>lua require('persistence').load(last=true)<cr>", "Restore last session" },
    d = { "<cmd>lua require('persistence').stop()<cr>", "Quit without saving session" },
  }
```

### [vim-sanegx](https://github.com/felipec/vim-sanegx)

**open url with `gx`**

```lua
{
  "felipec/vim-sanegx",
  event = "BufRead",
},
```

### markdown-preview.nvim

**preview markdown in the browser**

```lua
{
  "iamcco/markdown-preview.nvim",
  run = "cd app && npm install",
  ft = "markdown",
  config = function()
    vim.g.mkdp_auto_start = 1
  end,
},
```

### [glow.nvim](https://github.com/npxbr/glow.nvim)

**preview markdown in neovim**

```lua
-- You must install glow globally
-- https://github.com/charmbracelet/glow
-- yay -S glow
{
  "npxbr/glow.nvim",
  ft = {"markdown"}
  -- run = "yay -S glow"
},
```

### todo-comments.nvim

```lua
{
  "folke/todo-comments.nvim",
  event = "BufRead",
},
```
### [codi.vim](https://github.com/metakirby5/codi.vim)

**interactive scratchpad for hackers**

```lua
{
  "metakirby5/codi.vim",
  cmd = "Codi",
},
```


### [neuron](https://github.com/oberblastmeister/neuron.nvim)

**next generation note-taking**

```lua
	{"oberblastmeister/neuron.nvim"},
```

### [indent-blankline](https://github.com/lukas-reineke/indent-blankline.nvim)

**indentation guides for every line**

```lua
{
  "lukas-reineke/indent-blankline.nvim",
  event = "BufRead",
  setup = function()
    vim.g.indentLine_enabled = 1
    vim.g.indent_blankline_char = "▏"
    vim.g.indent_blankline_filetype_exclude = {"help", "terminal", "dashboard"}
    vim.g.indent_blankline_buftype_exclude = {"terminal"}
    vim.g.indent_blankline_show_trailing_blankline_indent = false
    vim.g.indent_blankline_show_first_indent_level = false
  end
},
```

### [vim-cursorword](https://github.com/itchyny/vim-cursorword)

**underlines the word under the cursor**

```lua
{
  "itchyny/vim-cursorword",
    event = {"BufEnter", "BufNewFile"},
    config = function()
      vim.api.nvim_command("augroup user_plugin_cursorword")
      vim.api.nvim_command("autocmd!")
      vim.api.nvim_command("autocmd FileType NvimTree,lspsagafinder,dashboard,vista let b:cursorword = 0")
      vim.api.nvim_command("autocmd WinEnter * if &diff || &pvw | let b:cursorword = 0 | endif")
      vim.api.nvim_command("autocmd InsertEnter * let b:cursorword = 0")
      vim.api.nvim_command("autocmd InsertLeave * let b:cursorword = 1")
      vim.api.nvim_command("augroup END")
      end
},
```

### neoscroll

```lua
{
  "karb94/neoscroll.nvim",
  event = "WinScrolled",
  config = function()
  require('neoscroll').setup({
        -- All these keys will be mapped to their corresponding default scrolling animation
        mappings = {'<C-u>', '<C-d>', '<C-b>', '<C-f>',
        '<C-y>', '<C-e>', 'zt', 'zz', 'zb'},
        hide_cursor = true,          -- Hide cursor while scrolling
        stop_eof = true,             -- Stop at <EOF> when scrolling downwards
        use_local_scrolloff = false, -- Use the local scope of scrolloff instead of the global scope
        respect_scrolloff = false,   -- Stop scrolling when the cursor reaches the scrolloff margin of the file
        cursor_scrolls_alone = true, -- The cursor will keep on scrolling even if the window cannot scroll further
        easing_function = nil,        -- Default easing function
        pre_hook = nil,              -- Function to run before the scrolling animation starts
        post_hook = nil,              -- Function to run after the scrolling animation ends
        })
  end
},
```

### [dial.nvim](https://github.com/monaqa/dial.nvim)

**extended incrementing/decrementing**

```lua
{
  "monaqa/dial.nvim",
  event = "BufRead",
  config = function()
    local dial = require "dial"
    vim.cmd [[
    nmap <C-a> <Plug>(dial-increment)
      nmap <C-x> <Plug>(dial-decrement)
      vmap <C-a> <Plug>(dial-increment)
      vmap <C-x> <Plug>(dial-decrement)
      vmap g<C-a> <Plug>(dial-increment-additional)
      vmap g<C-x> <Plug>(dial-decrement-additional)
    ]]

    dial.augends["custom#boolean"] = dial.common.enum_cyclic {
      name = "boolean",
      strlist = { "true", "false" },
    }
    table.insert(dial.config.searchlist.normal, "custom#boolean")

    -- For Languages which prefer True/False, e.g. python.
    dial.augends["custom#Boolean"] = dial.common.enum_cyclic {
      name = "Boolean",
      strlist = { "True", "False" },
    }
    table.insert(dial.config.searchlist.normal, "custom#Boolean")
  end,
},

```

### vim-surround

```lua
{
  "tpope/vim-surround",
  keys = {"c", "d", "y"}
},
```

### vim-repeat

```lua
{ "tpope/vim-repeat" },
```

## Language specific


### [bracey](https://github.com/turbio/bracey.vim)

**live edit html, css, and javascript**

```lua
{
  "turbio/bracey.vim",
  cmd = {"Bracey", "BracyStop", "BraceyReload", "BraceyEval"},
  run = "npm install --prefix server",
},
```

### vim-bundler

**lightweight support for ruby's bundler**

```lua
{
  "tpope/vim-bundler",
  cmd = {"Bundler", "Bopen", "Bsplit", "Btabedit"}
},
```

### vim-rails

```lua
{
  "tpope/vim-rails",
  cmd = {
    "Eview",
    "Econtroller",
    "Emodel",
    "Smodel",
    "Sview",
    "Scontroller",
    "Vmodel",
    "Vview",
    "Vcontroller",
    "Tmodel",
    "Tview",
    "Tcontroller",
    "Rails",
    "Generate",
    "Runner",
    "Extract"
  }
},
```

### autosave

```lua
{
  "Pocco81/AutoSave.nvim",
  config = function()
    require("plugins.zenmode").autoSave()
  end,
},
```

