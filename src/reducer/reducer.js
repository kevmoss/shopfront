import * as types from '../actions/types';

var _ = require('underscore');

var appReducer = function (initialState, action) {
  initialState = initialState || {basket: [], items: [
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
  ]};

  var newState;

  switch (action.type) {
    case types.ADD_ITEM:
      var newBasket = initialState.basket.slice();
      var isInBasket = _.find(newBasket, function (item) {
        return item.name === action.item.name
      })
      if(isInBasket) {
        isInBasket.qty += 1;
        newState = Object.assign({}, initialState, {
          basket: newBasket
        });
      } else {
        newState = Object.assign({}, initialState, {
          basket: initialState.basket.concat([action.item])
        });
      }

      break;
    case types.REMOVE_ITEM:
      var newBasket = initialState.basket.slice();
      var newList = initialState.items.slice();
      var itemIndex;
      var itemToRemove;
      // Removing Item from Basket
      for(var i = 0; i < newBasket.length; i++) {
        if(newBasket[i].name === action.item) {
          itemIndex = newBasket.indexOf(newBasket[i]);
          itemToRemove = newBasket[i];
        }
      }
      if(itemToRemove.qty > 1) {
        itemToRemove.qty -= 1;
        newState = Object.assign({}, initialState, {
          basket: newBasket,
          list: newList
        })
      }
      else {
        newBasket.splice(itemIndex, 1);
        newState = Object.assign({}, initialState, {
          basket: newBasket,
          list: newList
        })
      }

      // Updating List based on Basket removed Item
      for(var j = 0; j < newList.length; j++) {
        if(newList[j].name === action.item)  {
          newList[j].qty += 1;
        }
      }

      break;
    case types.EMPTY_BASKET:
      newState = Object.assign({}, initialState, {
        basket: []
      })
      break;
    case types.UPDATE_STOCK:
      var newItems = initialState.items.slice();
      var subtractQuantity = action.item.qty - 1;
      for(var i = 0; i < newItems.length; i++) {
        if(newItems[i].name === action.item.name) {
          newItems[i].qty = subtractQuantity;
        }
      }
      newState = Object.assign({}, initialState, {
        items: newItems
      })
      break;
    default:
      return initialState;
  }

  return newState;
}

module.exports = appReducer;
