const React = require('react');
const ReactDOM = require('react-dom');
const Container = require('./components/Container');
const store = require('./store');
import {Provider} from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('app'));
