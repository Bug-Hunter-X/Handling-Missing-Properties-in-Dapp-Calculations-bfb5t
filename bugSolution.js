```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price) { // Check if price property exists
      total += items[i].price;
    } else {
      console.warn(`Item ${items[i].name || `(Unnamed)`} is missing a price. Skipping...`);
      //Optionally handle missing price in other ways
    }
  }
  return total;
}

const cartItems = [
  { name: "Shirt", price: 25 },
  { name: "Pants", price: 50 },
  { name: "Shoes" } //Missing price property
];

const totalPrice = calculateTotal(cartItems);
console.log(totalPrice); // 75
```