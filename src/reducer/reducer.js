import * as types from '../actions/types';
//
// basket = [
//   {
//     item: 'Glass',
//     price: 1.50
//   }
// ]

var initialState = {
  basket: [

  ]
}

var appReducer = function (initialState, action) {
  initialState = initialState || {basket: []};

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
          itemIndex = newBasket.indexOf(action.item);
          newBasket.splice(itemIndex, 1);
        }
      }
      newState = Object.assign({}, initialState, {
        basket: newBasket
      })
      break;
    case types.EMPTY_BASKET:
      newState = Object.assign({}, initialState, {
        basket: []
      })
      break;
  }

  return newState;
}

export default appReducer;
