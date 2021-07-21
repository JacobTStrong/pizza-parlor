function Pizza(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.orderTotal = function() {
  let total = 0;
  if (this.size === 'small') {
    this.total = 8;
  } else if (this.size === 'medium') {
    this.total = 11;
  } else if (this.size === 'large') {
    this.total = 14;
  } else {
    this.total = 19;
  }
  if (this.crust === 'stuffedCrust') {
    this.total += 3;
  } else if (this.crust === 'thinCrust') {
    this.total += 1;
  } else {
    this.total += 0;
  }
};