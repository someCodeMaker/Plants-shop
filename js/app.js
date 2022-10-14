
//? burger menu
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


//? footer menu
// _________________________

function footerMenu() {
  const menu = document.querySelectorAll(".footer-list");
  const menuBtn = document.querySelectorAll(".footer-right__title");
  const menuContainer = document.querySelectorAll(".footer-right__wrapper")

  menuContainer.forEach((itemn, index) => {
    menuBtn[index].addEventListener("click", (e) => {
      menu[index].classList.toggle("show")
    })
  })
}
footerMenu();