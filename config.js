
var path = require('path');
var pkg = require('./package.json');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');

var routes = [
  {
    path: '',
    name: 'Home',
    handler: Home,
  },
  {
    path: 'about',
    name: 'About',
    handler: About,
  },
];

module.exports = {
  baseUrl: '/',
  routes: routes,
  redirects: [
  ],
  dest: path.join(__dirname, './'),
  props: {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    routes: routes,
    stylesheets: [ 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css' ],
    scripts: [
      '//localhost:8090/webpack-dev-server.js',
      '//localhost:8090/assets/bundle.js'
      //'/bundle.js'
    ],
  },
  Root: require('./components/root.jsx'),
  Default: require('./components/home.jsx'),
};

