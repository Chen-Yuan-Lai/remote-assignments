function avg(data) {
  let total = data.products.reduce((acc, cur) => acc + cur.price, 0);
  return total / data.size;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product1",
        price: 100,
      },
      {
        name: "Product2",
        price: 700,
      },
      {
        name: "Product3",
        price: 250,
      },
    ],
  })
); //should print the average price of all products
