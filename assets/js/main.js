/*===== Show Menu =======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

const showMenu = () => {
    navMenu.classList.add('show__menu')
}
navToggle.addEventListener('click', showMenu)

/*====== Close Menu ====*/
const closeMenu = () => {
    navMenu.classList.remove('show__menu')
}
navClose.addEventListener('click', closeMenu)