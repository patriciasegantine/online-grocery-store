export default function menuMObile() {
  const btnMobile = document.querySelector('#menu-bar');
  const navMenu = document.querySelector('#nav');

  function toggleMenu() {
    btnMobile.classList.toggle('fa-times');
    
    navMenu.classList.toggle('active');
  }

  function removeMobile() {
    btnMobile.classList.remove('fa-times');
    navMenu.classList.remove('active');
  }

  btnMobile.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', removeMobile);
}
