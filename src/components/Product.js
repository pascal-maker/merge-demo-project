class Product {
  constructor(name, basePrice) {
    this.name = name;
    this.basePrice = basePrice;
  }

  calculatePrice() {
    return this.basePrice;
  }
}

module.exports = Product;
