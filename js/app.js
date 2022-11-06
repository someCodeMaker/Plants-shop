
import { plants, reviews, templates } from "./db.js";
import { initContent, addContent, fragmentTemplate } from "./init_content.js"

initContent(plants, ".plants-list", templates.plant); //! initial html markup plant in plants-list 

//! burger menu
//__________________________
function burger() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("menu");

  burger.addEventListener("click", () => {
    const menu = document.querySelector(".open-menu")
    nav.classList.toggle("open-menu");
    burger.classList.toggle("open");

    if (menu) {
      menu.addEventListener('click', (e) => {
        nav.classList.remove("open-menu")
        burger.classList.remove("open")
      })
    }
  })
}
burger();


//! footer menu
// _________________________

function footerMenu() {
  const menu = document.querySelectorAll(".footer-list");
  const menuBtn = document.querySelectorAll(".footer-right__title");
  const menuContainer = document.querySelectorAll(".footer-right__wrapper")


  menuContainer.forEach((item, index) => {
    menuBtn[index].addEventListener("click", (e) => {
      menu[index].classList.toggle("show")
      menuContainer[index].classList.toggle("footer-menu-open")
    })
  })
}
footerMenu();


//! Login|Sign-in button
// _________________________________
function authorizationBtn() {
  const login = document.getElementById("login");
  const sign = document.getElementById("sing-in");
  const closeBtn = document.querySelector(".close-btn")
  const loginOpen = document.querySelector(".login-close");
  const signOpen = document.querySelector(".sign-close");
  const closeSign = document.querySelector(".close-sign")

  login.addEventListener("click", () => {
    loginOpen.classList.add("login-open");
    loginOpen.classList.remove("login-close");
    if (loginOpen) {
      closeBtn.addEventListener("click", () => {
        loginOpen.classList.add("login-close")
        loginOpen.classList.remove("login-open")
      })
    }
  })

  sign.addEventListener("click", () => {
    signOpen.classList.add("sign-open");
    signOpen.classList.remove("sign-close");

    closeSign.addEventListener("click", () => {
      signOpen.classList.add("sign-close");
      signOpen.classList.remove("sign-open");
    })
  })
}

authorizationBtn();


//! Hover item question icon
function hoverInfo() {

  const itemInfo = document.querySelectorAll(".item-question");
  const itemInfoBlock = document.querySelectorAll(".item-info");
  itemInfo.forEach((item, index) => {
    itemInfo[index].addEventListener("mouseover", (e) => {
      itemInfoBlock[index].style.visibility = "visible";

      if (itemInfoBlock[index].style.visibility == "visible") {
        itemInfoBlock[index].addEventListener("mouseout", () => {
          itemInfoBlock[index].style.visibility = "hidden";
        })
      }
    })
  })
}

hoverInfo();



// initContent(reviews, ".review-card__wrapper", templates.review)//! initial html markup reviews in plants-list
