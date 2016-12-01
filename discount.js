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
    var counts = [];
    var total = 0;
    for (item of basket.items) {
      var itemIndex = counts.indexOf(item);
      if (item.bOGOF) {
        if (itemIndex === -1 ) {
          counts.push(item);
          total += item.price;
        }
        else {
          counts.splice(itemIndex, 1)
        }
      }
      else total += item.price;
    }
    return total;
  }

};

module.exports = discount;