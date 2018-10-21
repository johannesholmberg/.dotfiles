function tree() {
  command tree -aC -I '.git|node_modules' --dirsfirst "$@" | less -FRNX;
}