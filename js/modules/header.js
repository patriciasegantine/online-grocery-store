export default function header() {}

const navbar = document.querySelector('.navbar-container');

function fixedMenu() {
  window.scrollY > 150
    ? navbar.classList.add('active')
    : navbar.classList.remove('active');
}

window.addEventListener('scroll', fixedMenu);
