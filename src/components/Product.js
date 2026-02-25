class Product {
  constructor(name, basePrice, discountRate = 0) {
    this.name = name;
    this.basePrice = basePrice;
    this.discountRate = discountRate;
  }

  calculatePrice() {
    return this.basePrice - this.getDiscount();
  }

  getDiscount() {
    return this.basePrice * this.discountRate;
  }
}

module.exports = Product;
