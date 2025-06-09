class Product {
    constructor(name) {
      this.name = name;
      this.quantity = 0;
    }
  
    
    addQuantity(amount) {
        this.quantity += amount;
    }

    getDescription() {
      return `${this.quantity} – ${this.name}`;
    }
  }

  const inputArray1 = ['Pasta', '65', 'Cheese', '7','Tomato', '18'];
  const inputArray2 = ['Pasta', '30', 'Cheese', '7','Pasta', '30', 'Pasta', '35'];

  main(inputArray1);
  console.log();
  
  main(inputArray2);


  
  function main(inputArray){
    const productMap = {};
    for (let i = 0; i < inputArray.length; i += 2) {
      const name = inputArray[i];
      const quantity = Number(inputArray[i + 1]);
    
      if (!productMap[name]) {
        productMap[name] = new Product(name);
      }
      productMap[name].addQuantity(quantity);
    }

    const products = Object.values(productMap);
    products.sort((a, b) => b.quantity - a.quantity);

    products.forEach(product => {
      console.log(product.getDescription());
    });
  }

 