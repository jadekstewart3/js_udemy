const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './scripts/app.js',
    chat: './scripts/chat.js',
    ui: './scripts/ui.js'
  }
    ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true
}