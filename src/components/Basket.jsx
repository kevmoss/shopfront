const React = require('react');
const actions = require('../actions/actions');

var Basket = React.createClass({
  render: function () {
    const {basket} = this.props.store.getState();
    const itemNodes = basket.map(function (item, index) {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
          <td className="is-icon">
            <button onClick={this.handleRemoveItem.bind(this,item)} className="button is-danger is-outlined" href="#" >
              Remove Item
            </button>
          </td>
        </tr>
      );
    }.bind(this));
    return (
      <div>
        <div className="level-item cart-title">
          <span>Your shopping cart</span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
        <table className="table is-striped basket-table">
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove Item</th>
          </tr>
          </thead>
          <tbody>
            {itemNodes}
          </tbody>
        </table>
      </div>
    );
  },
  handleRemoveItem: function (item) {
      var removeItem = item;
      this.props.store.dispatch(actions.removeItem(removeItem.name));
    }
});


module.exports = Basket;
