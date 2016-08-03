const React = require('react');


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
    var listnodes = items.map(function (item, index){
      return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td className="is-icon">
              <button className="button is-info is-outlined" href="#" onClick={this.props.handleAddItem.bind(null, item)}>
                Add Item
              </button>
            </td>
          </tr>
      )
    }.bind(this));

    return (
      <div>
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
            {listnodes}
          </tbody>
        </table>
      </div>
    );
  },


});

module.exports = List;
