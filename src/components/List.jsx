const React = require('react');
const actions = require('../actions/actions');

var _ = require('underscore');

var List = React.createClass({

  render: function () {
    var items = this.props.store.getState().items;
    var listNodes = items.map(function (item, index){
      return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              {
              (item.qty > 0)
              ? item.qty
              : <span className="out-of-stock">Out of stock</span>
              }
            </td>
            <td className="is-icon">
              {
              (item.qty > 0)
              ? <button className="button is-info is-outlined" href="#" onClick={this.handleAddItem.bind(this, item)}>
                Add Item
              </button>
              : <button disabled className="button is-info is-outlined" href="#" onClick={this.handleAddItem.bind(this, item)}>
              Add Item
              </button>
            }

            </td>
          </tr>
      )
    }.bind(this));

    return (
      <div>
        <div className="level-item list-title">
          <span>Products Available</span>
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
        <table className="table is-striped">
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add Item</th>
          </tr>
          </thead>
          <tbody>
            {listNodes}
          </tbody>
        </table>
      </div>
    );
  },
  handleAddItem: function (item, e) {
    var newItem = Object.assign({}, item, {
      qty: 1
    });
    this.props.store.dispatch(actions.addItem(newItem));

    this.props.store.dispatch(actions.updateStock(item));

  }

});

module.exports = List;
