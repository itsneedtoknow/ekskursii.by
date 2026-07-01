let navBurger = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__menu");
let dropDownItems = document.querySelectorAll(".nav__item--dropdown");
function toggleMobileNav() {
  navMenu.classList.toggle("nav__menu--open");
}
function openDropDown(e) {
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
