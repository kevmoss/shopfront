const React = require('react');
const ReactDOM = require('react-dom');

const Container = require('./components/Container');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Container />
      </div>

    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
