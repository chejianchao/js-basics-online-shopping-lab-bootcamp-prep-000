var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({ itemName:item, itemPrice: Math.floor(Math.random()*100+1) })
 return item
}

function viewCart() {
  // write your code here
  var str = "In your cart, you have";
  var idx = 0;
  for( var idx = 0; idx<cart.length; idx++ ){
    if( idx != 0 )
      str += ','
    if( idx  == cart.length-1 && cart.length>1)
      str += " and"
    str += ` ${item.itemName} at $${item.itemPrice}`
  }
  bananas at $17, pancake batter at $5, and eggs at $49
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
