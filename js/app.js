
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
  const menuBtn = document.querySelectorAll(".footer-title__wrapper");
  const menuContainer = document.querySelectorAll(".footer-right__wrapper");
  const openArrow = document.querySelectorAll(".open-arrow")


  menuContainer.forEach((item, index) => {
    menuBtn[index].addEventListener("click", e => {
      if (menu[index].classList.contains("show")) {
        openArrow[index].classList.remove("arrow-reverse")
        menu[index].classList.remove("show");
        e.currentTarget.parentElement.classList.remove("footer-menu-open");

      } else {

        menu.forEach((item, index) => {
          item.classList.remove("show");
          menuContainer[index].classList.remove("footer-menu-open")
          openArrow[index].classList.remove("arrow-reverse")
        });

        openArrow[index].classList.add("arrow-reverse")
        menu[index].classList.add("show");
        menuContainer[index].classList.add("footer-menu-open");
      }
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
//________________________________
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

//! Review initialization and slider realization
// _________________________________________________
function reviewPaginationControl(arr) {
  const paginationPrevious = document.querySelector("#pagination-left")
  const paginationNext = document.querySelector("#pagination-right")
  const reviewWrapper = document.querySelector(".review-card__wrapper")
  let review = 0

  initReview(arr, 0, reviewWrapper, templates.review);//init a first review on page

  // initialization review html markup to page
  function initReview(arr, index, id, contentFunctionName) {

    const fragment = document.createDocumentFragment();
    fragment.append(contentFunctionName(arr[index]));

    addReview(fragment, id);
  }

  // add html code to .review-card__wrapper block
  function addReview(content, element) {
    element.innerHTML = ""
    element.append(content);
  }

  // next review
  function nextReview() {
    review++;
    if (review >= arr.length) {
      review = 0;
    } else if (review < 0) {
      review = arr.length - 1;
    }

    initReview(arr, review, reviewWrapper, templates.review);

  }

  // previous review
  function previousReview() {
    review--
    if (review >= arr.length) {
      review = 0;
    } else if (review < 0) {
      review = arr.length - 1
    }

    initReview(arr, review, reviewWrapper, templates.review);

  }



  paginationPrevious.addEventListener("click", previousReview);//previous review button
  paginationNext.addEventListener("click", nextReview);// next review button

}

reviewPaginationControl(reviews);




