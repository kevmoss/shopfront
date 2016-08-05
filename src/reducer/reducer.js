import * as types from '../actions/types';

var _ = require('lodash');

var beginningState = {basket: [], items: [
  {
    name: "iPhone 7",
    price: 50000,
    qty: 1
  },
  {
    name: "Samsung Galaxy",
    price: 20000,
    qty: 5
  },
  {
    name: "Nokia 3210",
    price: 4027,
    qty: 8
  },
  {
    name: "Blackberry",
    price: 10000,
    qty: 4
  },
  {
    name: "Fax Machine",
    price: 3000,
    qty: 8
  }
], basketTotal: 0};

var appReducer = function (initialState, action) {
  var newBeginningState = _.cloneDeep(beginningState);
  initialState = initialState || newBeginningState;

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
          items: newList
        })
      }
      else {
        newBasket.splice(itemIndex, 1);
        newState = Object.assign({}, initialState, {
          basket: newBasket,
          items: newList
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
    var newItems = _.cloneDeep(beginningState.items);
      newState = Object.assign({}, initialState, {
        basket: [],
        items: newItems
      })
      break;
    // case types.REFILL_STOCK:
    //   newState = Object.assign({}, initialState, {
    //     items: originalStock
    //   })
    //   break;
    case types.UPDATE_STOCK:
      var newItems = initialState.items.slice();
      var subtractQuantity = action.item.qty - 1;
      for(var i = 0; i < newItems.length; i++) {
        if(newItems[i].name === action.item.name) {

          newItems[i].qty = subtractQuantity;
          console.log(newItems[i].qty);
        }
      }
      newState = Object.assign({}, initialState, {
        items: newItems
      })
      break;
    case types.BASKET_TOTAL:
      var newBasketTotal = initialState.basketTotal;
      newBasketTotal += action.item.price;

      newState = Object.assign({}, initialState, {
        basketTotal: newBasketTotal
      })
      break;
    default:
      return initialState;
  }

  return newState;
}

module.exports = appReducer;
