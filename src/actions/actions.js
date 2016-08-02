const actions = {}

// items = [{item: 'Glass', price: 2}];
// items = {
//   'Glass': {
//     price: 2,
//     quantity: 5
//   }
// }

actions.addItem = function (item, price) {
  return {
    type: 'ADD_ITEM',
    item: item,
    price: price
  };
};

actions.removeItem = function (item, quantity) {
  return {
    type: 'REMOVE_ITEM',
    item: item,
    quantity: quantity
  };
};


actions.emptyBasket = function () {
  return {
    type: 'EMPTY_BASKET'
  };
};

actions.checkout = function (total, method, address) {
  return {
    type: 'CHECKOUT',
    total: total,
    method: method,
    address: address
  };
};


module.exports = actions;
