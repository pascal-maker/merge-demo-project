class Product {
  constructor(name, basePrice, taxRate = 0) {
    this.name = name;
    this.basePrice = basePrice;
    this.taxRate = taxRate;
  }

  calculatePrice() {
    return this.basePrice + this.getTax();
  }

  getTax() {
    return this.basePrice * this.taxRate;
  }
}

module.exports = Product;
