const actions = {};

import * as types from './types';

// items = {
//   'Glass': {
//     price: 2,
//     quantity: 5
//   }
// }

actions.addItem = function (item, price) {
  return {
    type: types.ADD_ITEM,
    item: item,
    price: price
  };
};

actions.removeItem = function (item, quantity) {
  return {
    type: types.REMOVE_ITEM,
    item: item,
    quantity: quantity
  };
};


actions.emptyBasket = function () {
  return {
    type: types.EMPTY_BASKET
  };
};

actions.checkout = function (total, paymentMethod, address) {
  return {
    type: types.CHECKOUT,
    total: total,
    paymentMethod: paymentMethod,
    address: address
  };
};


export default actions;
