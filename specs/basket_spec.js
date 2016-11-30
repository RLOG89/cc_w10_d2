var basket = require('../basket');
var items = require('../item');
var discount = require('../discount');
var assert = require('assert')

describe('Basket', function() {
  it('should start empty', function() {
    assert.equal(0, basket.items.length);
  });
  it('can add items', function() {
    basket.addItem(items.beer);
    assert.equal(1, basket.items.length);
  });
  it('can have multiple items', function() {
    basket.addItem(items.pizza);
    assert.equal(2, basket.items.length)
  });
  it('can get total cost', function() {
    assert.equal(15, basket.getCost())
  });
  it('can remove items', function() {
    basket.addItem(items.pizza);
    basket.removeItem(items.pizza);
    assert.equal(2, basket.items.length)
  });
  it('can empty', function() {
    basket.empty();
    assert.equal(0, basket.items.length)
  });


});