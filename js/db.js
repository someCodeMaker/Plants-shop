
import { fragmentTemplate } from "./init_content.js";

const account = [
  {
    name: "Admin",
    password: "admin",
    email: "denishudzenko@gmail.com",
    phone: "+380939505097"
  }
]


//? items array
const plants = [
  {
    image: "/img/item1.png",
    name: "Outdoor Plant",
    price: 50,
    stock: 7,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam blanditiis ipsum,
    ex, voluptatibus reprehenderit deserunt`,
  },
  {
    image: "/img/item2.png",
    name: "Monstera Plant",
    price: 25,
    stock: 9,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam blanditiis ipsum,
    ex, voluptatibus reprehenderit deserunt`,
  },
  {
    image: "/img/item3.png",
    name: "Pottel Plant",
    price: 33,
    stock: 11,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam blanditiis ipsum,
    ex, voluptatibus reprehenderit deserunt`,
  },
  {
    image: "/img/item4.png",
    name: "Indoor Plant",
    price: 46,
    stock: 33,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam blanditiis ipsum,
    ex, voluptatibus reprehenderit deserunt`,
  },
];


//? reviews arr
const reviews = [
  {
    photo: "/img/avatar.png",
    name: "Hasanul Islam",
    profession: "Marketing CEO",
    article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae nemo natus laudantium, placeat neque vel deserunt dolorum esse veritatis corrupti commodi est explicabo molestias, animi corporis incidunt blanditiis suscipit."
  },
  {
    photo: "/img/avatar.png",
    name: "Maria",
    profession: "Marketing CEO",
    article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, recusandae nemo natus laudantium, placeat neque vel deserunt dolorum esse veritatis corrupti commodi."
  },
  {
    photo: "/img/avatar.png",
    name: "Denis Hudzenko",
    profession: "Web Developer",
    article: "Checking how reviews working and make some notes."
  }
];


//? templates for HTML markup
const templates = {

  plant(object) {
    const fragment =
      ` <li class="plants-list__item plants-item">
    <div class="plants-item__conteiner">
      <div class="item-question">?</div>
      <div class="item-info">
        <dl>
          <dt>${object.name}</dt>
          <dd>${object.description}</dd>
        </dl>
      </div>
      <img src="${object.image}" alt="plant" class="plants-item-img">
      <span class="plants-item__name">${object.name}</span>
      <ul class="plants-item-rating">
        <li class="item-rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"
              fill="#F4C300" />
          </svg></li>
        <li class="item-rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"
              fill="#F4C300" />
          </svg></li>
        <li class="item-rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"
              fill="#F4C300" />
          </svg></li>
        <li class="item-rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"
              fill="#F4C300" />
          </svg></li>
        <li class="item-rating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
            fill="none">
            <path
              d="M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z"
              fill="#F4C300" />
          </svg></li>
      </ul>
      <span class="plants-item__price">$${object.price}</span>
      <div class="plants-item__buy">
        <span class="in-stock">${object.stock} left</span>
        <button id="to-cart" class="btn">To cart</button>
      </div>
    </div>
  </li>`;

    return fragmentTemplate(fragment);
  },

  review(object) {
    const fragment = `<div class="review-card__wrapper">
          <div class="reviews-card__user user-review">
            <img src="${object.photo}" alt="avatar" class="user-review__avatar">
            <div class="user-review__info">
              <h5 class="user-review__name">${object.name}</h5>
              <span class="user-review__profession">${object.profession}</span>
            </div>
          </div>
          <p class="reviews-card__review">${object.article}</p>
          </div>`;
    return fragmentTemplate(fragment);
  },

  cartItem(object) {
    const fragment = `<li class="cart-item">
                <div class="cart-item__left">
                  <img src="${object.image}" alt="plant" class="cart-item__img">
                  <span class="cart-item__name">${object.name}</span>
                </div>
                <div class="cart-item__conteiner">
                  <span class="cart-item__quantity"><button class="cart-item-btn cart-item__btn-minus">-</button><span class="item-count">${object.value}</span><button
                      class="cart-item-btn cart-item__btn-plus">+</button> </span>
                  <span class="cart-item__price">$${object.price}</span>
                  <span class="cart-item__total">${object.price * object.value}</span>
                  <button class="cart-item__delete">+</button>
                </div>
                </li>`
    return fragmentTemplate(fragment);
  }
};


export { plants, reviews, templates };