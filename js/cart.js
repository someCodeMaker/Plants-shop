
import { plants, reviews, templates } from "./db.js";
import { initContent, addContent, fragmentTemplate } from "./init_content.js"

export function basketApp() {

  // variables for cart
  const cart = []; // clone of items for manipulation
  const cartItems = []; // array with filtered items in basket
  const plantsName = []; // items in basket names array for checking for duplicate
  const toCart = document.querySelectorAll("#to-cart"); // items button "To basket" array
  const inStock = document.querySelectorAll(".in-stock"); // item available banner
  const plantItems = document.querySelectorAll(".plants-item"); // block for all item content
  const cartBody = document.querySelector(".cart"); //basket main content
  const cartItemList = document.querySelector(".cart-items")


  // basket open/close button functional
  function onBasket() {
    const basketButton = document.getElementById("cart-icon");
    const cart = document.getElementById("cart");
    const cartClose = document.getElementById("close-cart");

    basketButton.addEventListener("click", (elem) => {
      cart.classList.add("open-cart");
      checkIfEmpty();

    });

    cartClose.addEventListener("click", () => {
      cart.classList.remove("open-cart")
    })
  }
  onBasket(); //init open/close basket button

  // check if basket is empty then add text to basket main body
  function checkIfEmpty() {
    const emptyCartText = document.createElement("div"); //text node in main cart "Cart is empty"
    emptyCartText.classList.add("cart-empty");
    emptyCartText.innerText = "Cart is empty!";

    if (cartItems == '') {
      cartItemList.prepend(emptyCartText);
    }

  }


  // clone items to cart
  plants.forEach((item) => {
    let obj = JSON.parse(JSON.stringify(item));
    obj.value = 0;
    // add item to cart Array
    cart.push(obj);
  })


  // indicator count items on basket button
  function showItemCountOnBasket() {
    const plantsInCart = document.querySelector("in-cart");

    if (cartItems == "") {
      plantsInCart.classList.remove("plants-includes");
    }
    plantsInCart.classList.add("plants-includes");
    plantsInCart.innerText = `${cartItems.length}`;
  }



  // inner html in basket
  function addItemToCart(item, id, contentTemplate) {

    const fragment = document.createDocumentFragment();

    fragment.append(contentTemplate(item));
    addContent(fragment, id);

    cartItems.push(item);
    // add item to basketItem Array
    showItemCountOnBasket();

  }


  // checking item count in stock and make changes on page depends on items left
  function checkItemInStock(item, index) {
    // show if item is in stock available
    if (item.stock > 1) {
      item.stock -= 1;
      inStock[index].innerText = ` ${item.stock} left`;

    } else {
      let outText = document.createElement("span");

      inStock[index].innerHTML = "Out of stock!";
      toCart[index].style.display = "none";
      outText.classList.add("item__out");
      outText.innerHTML = "Out of Stock!"
      itemCard[index].append(outText);

    }
  }


  // make order price calculation
  function multiply() {
    // item price and summary price variable
    let priceTag = document.querySelectorAll('.basket__item-price');
    const price = document.getElementById("total-price");
    let result;
    let sum = 0;

    cartItems.forEach((item, index) => {
      result = item.price * item.value;
      sum = sum + result;
      priceTag[index].innerHTML = `${result} $`; // show price of item depends on count
    })

    price.innerHTML = `${sum} $`;
  }


  // find index of current item element using compering arrays object
  function findIndex(arr, item) {
    let currentItem = arr.find((e) => e === item);
    return arr.indexOf(currentItem);
  }


  // add eventListener for item inputs in basket. Allow change count of same item adn auto change equal price
  function eventInputChange(input) {

    cartItems.forEach((item, index) => {
      input[index].addEventListener('input', (e) => {
        item.value = input[index].value;
        multiply(index);
      })
    })

  }


  // filter basket to only unique items and add value depends on item counts
  function initBasket(arr, item, index) {

    const itemValue = document.querySelectorAll('#item-counter'); //items values in basket array
    let arrItemIndex = findIndex(arr, item);


    // check if in basket same item just add +1 value to input field then end function.
    if (plantsName.includes(cart[index].name)) {
      item.value += 1;
      itemValue[arrItemIndex].value = item.value;
      return;
    } else {
      item.value += 1;
      addItemToCart(item, ".cart-items", templates.cartItem);  //initial items in cart
      plantsName.push(item.name);

      const itemValue = document.querySelectorAll('#item-counter'); //items values in basket for first item in basket without it won't work calculation
      //TODO eventInputChange(itemValue);

      // remove "Basket is empty" text from basket main section
      if (cartItems != '') {
        // emptyBasketText.style.display = "none";
        showItemCountOnBasket();
      }

    }
  }


  // button click for showing items in stock
  plants.forEach((item, index) => {
    toCart[index].addEventListener('click', function (elem) {
      checkItemInStock(item, index);

    })
  })

  // button click to add content to cart and logic
  cart.forEach((item, index) => {
    toCart[index].addEventListener('click', function (elem) {
      console.log(cart);

      initBasket(cart, item, index);
      multiply();
    });
  })
}

// init a basket logic
// basketApp();