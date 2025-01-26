```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price; //Error: Assuming all items have a price property
  }
  return total;
}

const cartItems = [
  { name: "Shirt", price: 25 },
  { name: "Pants", price: 50 },
  { name: "Shoes" } //Missing price property
];

const totalPrice = calculateTotal(cartItems);
console.log(totalPrice); // NaN
```