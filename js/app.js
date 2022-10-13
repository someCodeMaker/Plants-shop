
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