class Product {
  constructor(n, p) {
    // constructor func tion to create new real life instances called as object
    // When we create an object this constructor is the first function that gets called
    this.name = n;
    this.price = p;
  }

  //member function

  displayProduct() {
    console.log(this.name, this.price);
  }

  buyProduct() {}
}

let iphone = new Product("iph", 100000);
let macbook = new Product("Macbook air", 1000000);

iphone.displayProduct();
