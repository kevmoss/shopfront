const actions = {};

import * as types from './types';

// items = {
//   'Glass': {
//     price: 2,
//     quantity: 5
//   }
// }

actions.addItem = function (item) {
  return {
    type: types.ADD_ITEM,
    item: item
  };
};

actions.removeItem = function (item, price) {
  return {
    type: types.REMOVE_ITEM,
    item: item,
    price: price
  };
};


actions.emptyBasket = function () {
  return {
    type: types.EMPTY_BASKET
  };
};

actions.refillStock = function () {
  return {
    type: types.REFILL_STOCK
  };
};

actions.checkout = function () {
  return {
    type: types.CHECKOUT
  };
};

actions.updateStock = function (item) {
  return {
    type: types.UPDATE_STOCK,
    item: item
  };
};

actions.updateBasketTotal = function (item) {
  return {
    type: types.BASKET_TOTAL,
    item: item
  }
};


module.exports = actions;
