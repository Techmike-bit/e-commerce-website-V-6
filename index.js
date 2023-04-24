
var button=document.querySelectorAll(".jpg");
var numberOfButtons=document.querySelectorAll(".jpg").length;
for(var i=0; i<numberOfButtons; i++){
  button[i].addEventListener("click", function(){
    var currentKey = this.dataset.key;
    changeImage(document.querySelector(".jpg1"), this.dataset.key);
  buttonAnimation(currentKey);
  });
}


function changeImage(image, key){
  switch (key) {

    case "a":
  image.setAttribute("src", "images/image-product-1.jpg");
      break;

    case "b":
      image.setAttribute("src", "images/image-product-2.jpg");
      break;

    case "c":
        image.setAttribute("src", "images/image-product-3.jpg");
      break;

    case "d":
      image.setAttribute("src", "images/image-product-4.jpg");
      break;


    default:
      console.log(innerHTML);
  }
}
var count=document.querySelector(".plus");
var minus=document.querySelector(".minus");
var numberOfShoes=document.querySelector(".no-of-shoes");
count.addEventListener("click",function(){
   numberOfShoes.textContent = parseInt(numberOfShoes.textContent) + 1;
})
minus.addEventListener("click",function(){
   var subtraction= parseInt(numberOfShoes.textContent);
   if (subtraction>0){
     numberOfShoes.textContent = subtraction-1;
   }
})


const cart = {
  items: []
};

const addToCartButton= document.querySelector(".btn-cart");

addToCartButton.addEventListener("click", function() {
   const quantity = parseInt(numberOfShoes.textContent);
  const item = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    quantity: quantity,
    price:"$"+quantity*125

  };
  cart.items.push(item);
  alert(quantity+" "+"Fall Limited Edition Sneakers Has Been Added To Cart");

   renderCart();
})
const cartIcon = document.querySelector('.cart-icon');
const cartEl = document.getElementById('cart');

cartIcon.addEventListener('click', function() {
  cartEl.classList.toggle('active');
});
function deleteItem(id) {
  const index = cart.items.findIndex(item => item.id === id);
  cart.items.splice(index, 1);
  renderCart();
}
/**function renderCart() {
  const cartEl = document.getElementById('cart');
  let html = '';

  cart.items.forEach(item => {
    html += `
      <div class="cart-items">
      <p>  <h5>${item.name}</h5> <h6>Quantity: ${item.quantity}</h6></p>
          <h6>Price: ${item.price}</h6>
           <button onclick="deleteItem(${item.id})">Delete</button></p>
      </div>
    `;
  });

  cartEl.innerHTML = html;

}**/
function renderCart() {
  const cartEl = document.getElementById('cart');
  let html = '';
  let totalPrice = 0;

  cart.items.forEach(item => {
    html += `
      <div class="cart-items">
        <p>
          <h5>${item.name}</h5>
          <h6>Quantity: ${item.quantity}</h6>
        </p>
        <h6>Price: ${item.price}</h6>
        <button onclick="deleteItem(${item.id})">Delete</button>
      </div>
    `;
    totalPrice += parseFloat(item.price.slice(1));
  });

  html += `
    <div class="cart-total">
      <h6>Total Price: $${totalPrice.toFixed(2)}</h6>
      <button href="checkoutpage.html " class="checkout-button">Proceed to Checkout</button>
    </div>
  `;

  cartEl.innerHTML = html;

  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', function() {
    window.location.href = 'checkout.html';
  });
}
function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  } ,100  );
}
