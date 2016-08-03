const React = require('react');
const actions = require('../actions/actions');

var items = [
  {
    name: "Glass",
    price: "£2",
    qty: 2
  },
  {
    name: "Coasters",
    price: "£2",
    qty: 2
  },
  {
    name: "Straws",
    price: "£1",
    qty: 5
  },
  {
    name: "Cups",
    price: "£2.50",
    qty: 4
  },
  {
    name: "Spoons",
    price: "£1.50",
    qty: 8
  }
];

var List = React.createClass({

  render: function () {
    var listNodes = items.map(function (item, index){
      return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td className="is-icon">
              <button className="button is-info is-outlined" href="#" onClick={this.handleAddItem.bind(this, item)}>
                Add Item
              </button>
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
  }


});

module.exports = List;
