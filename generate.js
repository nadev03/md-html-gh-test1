var fs = require('fs');

fs.copyFileSync('./index.txt', './index.html');
fs.copyFileSync('./about.txt', './about.html');