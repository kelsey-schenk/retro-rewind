// navbar-burger scripting
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
  console.log("I got clicked")
  navbarMenu.classList.toggle('is-active');
});

