const render = require('react-dom').render,
      React = require('react'),
      HelloWorld = require('./components/hello_world');

render(
  <HelloWorld greeting="Hello" name="World" />,
  document.getElementById('app')
);
