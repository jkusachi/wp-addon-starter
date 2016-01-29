'use strict';

var path = require('path');

module.exports = {
      entry: './src/js/main.js',

      output: {
        path: path.join('./dist/js/'),
        filename: 'bundle.js'
      },
      externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
      }
  }