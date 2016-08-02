import chai from 'chai';
import {expect} from 'chai';
import actions from '../src/actions/actions';

describe('actions.addItem', function () {
  it('is a function', function () {
    expect(actions.addItem).to.be.a('function');
  });
  it('takes an argument', function () {
    expect(actions.addItem.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.addItem()).to.be.an('object');
  });
  it('returns expected', function () {
    expect(actions.addItem('Glass')).to.eql({
      type: 'ADD_ITEM',
      item: 'Glass'
    });
  });
});

describe('actions.removeItem', function () {
  it('is a function', function () {
    expect(actions.removeItem).to.be.a('function');
  });
  it('takes an argument', function () {
    expect(actions.removeItem.length).to.equal(1);
  });
  it('returns an object', function () {
    expect(actions.removeItem()).to.be.an('object');
  });
  it('returns expected', function () {
    expect(actions.removeItem('Glass')).to.eql({
      type: 'REMOVE_ITEM',
      item: 'Glass'
    });
  });
});

describe('actions.emptyBasket', function () {
  it('is a function', function () {
    expect(actions.emptyBasket).to.be.a('function');
  });
  it('does not take an argument', function () {
    expect(actions.emptyBasket.length).to.equal(0);
  });
  it('returns an object', function () {
    expect(actions.emptyBasket()).to.be.an('object');
  });
  it('returns expected', function () {
    expect(actions.emptyBasket()).to.eql({
      type: 'EMPTY_BASKET'
    })
  });
});

describe('actions.checkout', function () {
  it('is a function', function () {
    expect(actions.checkout).to.be.a('function');
  });
  it('take 3 arguments', function () {
    expect(actions.checkout.length).to.equal(3);
  });
  it('returns an object', function () {
    expect(actions.checkout()).to.be.an('object');
  });
  it('returns expected', function () {
    expect(actions.checkout(200, 'Paypal', 'UK')).to.eql({
      type: 'CHECKOUT',
      total: 200,
      paymentMethod: 'Paypal',
      address: 'UK'
    })
  });
});
