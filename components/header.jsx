
var React = require('react');
var Link = require('react-router').Link;

var Rebass = require('rebass');

var Header = React.createClass({

  render: function() {

    var renderLink = function(route) {
      return (
        <Link to={'/'+route.path}
          key={'header-link-'+route.name}>
          {route.name}
        </Link>
      )
    };

    return (
      <header>
        <h1>{this.props.name}</h1>
        {this.props.routes.map(renderLink)}
      </header>
    )
  }

});

module.exports = Header;
