var discount = {
  percentOff: function(basket, percent) {
    var total = basket.getCost();
    if(total >= 20) {
      (total *= (100 - percent)/100);
    }
    return total;
  },
  loyaltyCard: function(customer, basket) {
    var total = basket.getCost();
    if (customer.loyaltyCard === true) {
      total *= .95
    }
    return total;
  },
  bOGOF: function(basket) {
  // get count of each item //
  // get price of each count //
  // if divisible by 2 then divide total by 2 else 
  //.includes
  //basket.items.forEach(item,)
  //Math.seal
  var total = 0;
  for(item of basket.items) {
    if(item.bOGOF === true) {
      

      // ((item.count > 2) && (item % 2 === 0))
    }
    total += item.price
  }
  }
};

module.exports = discount;