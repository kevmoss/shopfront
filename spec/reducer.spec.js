import chai from 'chai';
import {expect} from 'chai';
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import appReducer from '../src/reducer/reducer';

describe('appReducer', function () {
  it('is a function', function () {
    expect(appReducer).to.be.a('function');
  });
  it('expects 2 arguments', function () {
    expect(appReducer.length).to.equal(2);
  });
  it('handles ADD_ITEM correctly', function () {
    var myAction = actions.addItem('Glass');
    var initialState = {
      basket: []
    }
    var newState = appReducer(initialState, myAction);
    expect(newState).to.eql({
      basket: ['Glass']
    })
  });
  it('handles REMOVE_ITEM correctly', function () {
    var initialState = {basket: ['Coaster', 'Glass']};
    var myAction = actions.removeItem('Glass');
    var newState = appReducer(initialState, myAction);

    expect(newState).to.eql({
      basket: ['Coaster']
    })
  })
});
