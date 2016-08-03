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
        <div key={index}>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>{item.qty}</p>
      </div>
      )
    });

    return (
      <div>
    {listnodes}
      </div>
    );
  }
});

module.exports = List;
