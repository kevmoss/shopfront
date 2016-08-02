import chai from 'chai';
import {expect} from 'chai';
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import appReducer from '../src/reducer/reducer';

describe('appReducer', function () {
  it('is a function', function () {
    expect(appReducer).to.be.a('function');
  });
  it('expects 1 argument', function () {
    expect(appReducer.length).to.equal(2);
  });
  it('handles ADD_ITEM correctly', function () {
    var myAction = actions.addItem({name: 'Glass', price: "£2", quantity: 2 });
    var initialState = {
      basket: []
    }
    var newState = appReducer(initialState, myAction);
    expect(newState).to.eql({
      basket: [{name: 'Glass', price: "£2", quantity: 2 }]
    })
  });
  it('handles REMOVE_ITEM correctly', function () {
    var initialState = {basket: [{name: 'Glass', price: "£2", quantity: 2 }, {name: 'Coaster', price: "£2", quantity: 2 }]};

    var myAction = actions.removeItem('Coaster');
    var newState = appReducer(initialState, myAction);

    expect(newState).to.eql({
      basket: [{name: 'Glass', price: "£2", quantity: 2 }]
    })
  });
  it('handles REMOVE_ITEM that\'s not there correctly', function () {
    var initialState = {basket: [{name: 'Glass', price: "£2", quantity: 2 }, {name: 'Coaster', price: "£2", quantity: 2 }]};
    var myAction = actions.removeItem('Straw');
    var newState = appReducer(initialState, myAction);

    expect(newState).to.eql({
      basket: [{name: 'Glass', price: "£2", quantity: 2 }, {name: 'Coaster', price: "£2", quantity: 2 }]
    })
  });
  it('handles EMPTY_BASKET correctly', function () {
    var myAction = actions.emptyBasket();
    var newState = appReducer(null, myAction);
    expect(newState).to.eql({
      basket: []
    });
  })

});
