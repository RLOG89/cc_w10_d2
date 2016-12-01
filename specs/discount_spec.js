var discount = require('../discount');
var basket = require('../basket');
var items = require('../item');
var customer = require('../customer');
var assert = require('assert');

describe("Discount", function() {

  it('should not discount 10% on totals over £20', function() {
    basket.addItem(items.beer);
    basket.addItem(items.pizza);
    discount.percentOff(basket, 10);
    assert.equal(15, basket.getCost());
  });
  it('should discount 10% on totals over £20', function() {
    basket.addItem(items.pizza);
    assert.equal(22.50, discount.percentOff(basket, 10));
  });
  it('should discount 5% if customer has loyalty card', function() {
    assert.equal(23.75, discount.loyaltyCard(customer.bobby, basket));
  });
  it('should not discount 5% if customer has no loyalty card', function() {
    assert.equal(25, discount.loyaltyCard(customer.tam, basket));
  });
  it('should deduct bogof discount on bogof items', function() {
    basket.empty();
    basket.addItem(items.pizza);
    basket.addItem(items.pizza);
    basket.addItem(items.pizza);
    basket.addItem(items.curry);
    basket.addItem(items.curry);
    basket.addItem(items.curry);
    basket.addItem(items.beer);
    basket.addItem(items.beer);
    basket.addItem(items.beer);
    assert.equal(69, basket.getCost());
    assert.equal(51,discount.bOGOF(basket));    
  })

});