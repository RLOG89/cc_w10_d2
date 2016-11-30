var basket = {
  items: [],
  addItem: function(item) {
    this.items.push(item);
  },
  getCost: function() {
    var total = 0;
    for (var item of this.items) {
      total += item.price;
    }
    return total;
  },
  removeItem: function(item) {
    var index = this.items.indexOf(item)
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },
  empty: function() {
    this.items = [];
  }
};

module.exports = basket;