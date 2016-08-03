const React = require('react');

const List = require('./List');
const Basket = require('./Basket');

var Container = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Container</h1>
        <List />
        <Basket />
      </div>
    );
  }
});

module.exports = Container;
