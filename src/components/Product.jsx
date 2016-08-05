const React = require('react');
const actions = require('../actions/actions');
import {connect} from 'react-redux';

var Product = React.createClass({
  render: function () {
    return (
      <tr >
        <td>{this.props.name}</td>
        <td>£{(this.props.price / 100).toFixed(2) }</td>
        <td>
          {
          (this.props.qty > 0)
          ? this.props.qty
          : <span className="out-of-stock">Out of stock</span>
          }
        </td>
        <td className="is-icon">
          {
          (this.props.qty > 0)
          ? <button onClick={this.props.handleAddItem.bind(null, this.props)} className="button is-info is-outlined" href="#">
            Add Item
          </button>
          : <button disabled className="button is-info is-outlined" href="#">
          Add Item
          </button>
        }

        </td>
      </tr>
    );
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    handleAddItem: function (item, e) {
      var newItem = Object.assign({}, item, {
        qty: 1
      });
      dispatch(actions.addItem(newItem));
      dispatch(actions.updateStock(item));
      dispatch(actions.updateBasketTotal(item));
    }
  }
}

module.exports = connect(null, mapDispatchToProps)(Product);
