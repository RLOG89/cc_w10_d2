var customer = require('../customer');
var assert = require('assert');

describe('Customer', function() {
  it('should have a name', function() {
    assert.equal("Bobby", customer.bobby.name);
  });
  it('should have a discount card', function() {
    assert.equal(true, customer.bobby.loyaltyCard);
  });
  it('should not have a discount card', function() {
    assert.equal(false, customer.tam.loyaltyCard);
  });
});