const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const hamburgerMenu = document.querySelector('.header__hamburger');

hamburgerMenu.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('blur', hideMenu);

function toggleMenu() {
  hamburgerMenu.classList.toggle('active');
  headerNav.classList.toggle('active');
};

function hideMenu() {
  hamburgerMenu.classList.remove('active');
  headerNav.classList.remove('active');
};
