var items = require('../item');
var assert = require('assert');

describe('Item', function() {
  it('should have a name', function() {
    assert.equal("Innes & Gunn", items.beer.name);
  });
  it('should have a price', function() {
    assert.equal(10, items.pizza.price);
  });
  it('should tell if bOGOF item or not', function() {
    assert.equal(false, items.beer.bOGOF);
    assert.equal(true, items.pizza.bOGOF);
  });
});

