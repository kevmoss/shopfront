import * as types from '../actions/types';
//
// basket = [
//   {
//     item: 'Glass',
//     price: 1.50
//   }
// ]


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
      newState = Object.assign({}, initialState, {
        basket: initialState.basket.concat([action.item])
      });
      break;
    case types.REMOVE_ITEM:
      var newBasket = initialState.basket.slice();
      var itemIndex;
      for(var i = 0; i < newBasket.length; i++) {
        if(newBasket[i].name === action.item) {
          itemIndex = newBasket.indexOf(newBasket[i]);
        }
      }
      newBasket.splice(itemIndex, 1);
      newState = Object.assign({}, initialState, {
        basket: newBasket
      })
      break;
    case types.EMPTY_BASKET:
      newState = Object.assign({}, initialState, {
        basket: []
      })
      break;
    case types.UPDATE_STOCK:
      var newItems = initialState.items.slice();
      for(var i = 0; i < newItems.length; i++) {
        if(newItems[i].name === action.item.name) {
          newItems[i].qty = action.item.qty;
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
