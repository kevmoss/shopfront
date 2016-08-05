const React = require('react');
const actions = require('../actions/actions');
import {connect} from 'react-redux';

var Basket = React.createClass({
  render: function () {
    const itemNodes = this.props.basket.map(function (item, index) {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>£{(item.price / 100).toFixed(2) }</td>
          <td>{item.qty}</td>
          <td className="is-icon">
            <button onClick={this.props.handleRemoveItem.bind(null, item)} className="button is-danger is-outlined" href="#" >
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
        <div>
          Total Price: £{(this.props.basketTotal / 100).toFixed(2)}
          </div>
        <button onClick={this.props.handleEmptyBasket} className="button is-danger " href="#" >
          Empty Basket
        </button>
      </div>
    );
  }
});

const mapStateToProps = function (state) {
  return {
    basket: state.basket,
    basketTotal: state.basketTotal
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleRemoveItem: function (item) {
      dispatch(actions.removeItem(item.name));
    },
    handleEmptyBasket: function () {
      dispatch(actions.emptyBasket());
    }
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Basket);
