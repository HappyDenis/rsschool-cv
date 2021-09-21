const burgerHeader = document.querySelector(".burger");
const menuHeader = document.querySelector(".menu");
burgerHeader.addEventListener("click", () => {
  burgerHeader.classList.toggle("active");
  menuHeader.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    burgerHeader.classList.remove("active");
    menuHeader.classList.remove("active");
  })
);
