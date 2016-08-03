const React = require('react');
const actions = require('../actions/actions');

const List = require('./List');
const Basket = require('./Basket');

var Container = React.createClass({
  render: function () {
    return (
      <div>
        <div className="store-title">
          <h1 className="title is-1">That amazing shop again!</h1>
        </div>
        <div className="columns">
          <div className="column is-half list">
            <List handleAddItem={this.handleAddItem} />
          </div>
          <div className="column is-half basket">
            <Basket basket={this.props.store.getState().basket} />
          </div>
        </div>
      </div>
    );
  },
  handleAddItem: function (item, e) {
    console.log(item)
    var newItem = Object.assign({}, item, {
      qty: 1
    });
    this.props.store.dispatch(actions.addItem(newItem));
  }
});

module.exports = Container;
