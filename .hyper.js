module.exports = {
  updateChannel: 'canary',
  config: {
    fontSize: 20,
    fontFamily: '"Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    shell: '/bin/zsh',

    hypercwd: {
      initialWorkingDirectory: '~/Code'
    },

    hyperlinks: {
      defaultBrowser: true
    },

    visor: {
      hotkey: 'CommandOrControl+Esc',
    }
  },

  plugins: [
    'hyper-dracula',
    'hypercwd',
    'hyperlinks',
    'hyperterm-visor'
  ]
};
