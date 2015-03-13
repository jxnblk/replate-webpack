
var build = require('static-react/build');
var options = require('./config'); // Custom app config
console.log('building...')
build(options); // Writes static HTML to destination
console.log('done building');

