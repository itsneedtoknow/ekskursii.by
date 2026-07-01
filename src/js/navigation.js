let navBurger = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__menu");
let dropDownItems = document.querySelectorAll(".nav__item--dropdown");
const body = document.body;
function toggleMobileNav(e) {
  e.stopPropagation();
  body.classList.toggle("no-scroll");
  navMenu.classList.toggle("nav__menu--open");
}
function openDropDown(e) {
  e.stopPropagation();
  let currentDropDownItem = e.target.closest(".nav__item--dropdown");
  dropDownItems.forEach((item) => {
    if (item !== currentDropDownItem) {
      item.classList.remove("nav__item--dropdown--open");
    }
  });

  currentDropDownItem.classList.toggle("nav__item--dropdown--open");
}
navBurger.addEventListener("click", toggleMobileNav);
dropDownItems.forEach((item) => {
  item.addEventListener("click", openDropDown);
});
document.addEventListener("click", (e) => {
  dropDownItems.forEach((item) => {
    item.classList.remove("nav__item--dropdown--open");
  });
  if (
    navMenu.classList.contains("nav__menu--open") &&
    !navMenu.contains(e.target)
  ) {
    navMenu.classList.remove("nav__menu--open");
    body.classList.remove("no-scroll");
  }
});
