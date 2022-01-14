set scrolloff=8
set number
set expandtab
set tabstop=2 softtabstop=2
set shiftwidth=2
set smartindent
set relativenumber
syntax on

call plug#begin('~/.vim/plugged')
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'ayu-theme/ayu-vim'
call plug#end()

set termguicolors
let ayucolor="dark"


let mapleader = " "

nnoremap <leader>pv :Vex<CR>
nnoremap <leader><CR> :so ~/.vimrc<CR>
nnoremap <C-p> :GFiles<CR>
nnoremap <leader>pf :Files<CR>


