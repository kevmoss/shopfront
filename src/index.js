const React = require('react');
const ReactDOM = require('react-dom');
const Container = require('./components/Container');
const store = require('./store');

ReactDOM.render(<Container store={store}/>, document.getElementById('app'));
