const React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <h1 className="greeting">
        {this.props.greeting}, {this.props.name}!
      </h1>
    );
  }
});
