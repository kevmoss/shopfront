const React = require('react');
const actions = require('../actions/actions');

const List = require('./List');
const Basket = require('./Basket');

var Container = React.createClass({

  render: function () {

    return (
      <div>
        <div className="store-title">
          <h1 className="title is-1 app-title">Northcoders Shop</h1>
        </div>
        <div className="columns">
          <div className="column is-half list">
            <List />
          </div>
          <div className="column is-half basket">
            <Basket />
          </div>
        </div>
      </div>
    );
  },

});

module.exports = Container;
