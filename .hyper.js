
module.exports = {
  updateChannel: 'canary',
  config: {
    fontSize: 20,
    fontFamily: '"Dank Mono", "Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    shell: '/bin/zsh',
    hypercwd: {
      initialWorkingDirectory: '~/Code'
    },
    hyperlinks: {
      defaultBrowser: true
    },
  },

  plugins: ['hypertheme', 'hypercwd', 'hyperlinks', "hyper-night-owl"]
};