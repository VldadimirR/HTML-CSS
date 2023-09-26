const menuActive = document.querySelector('.menu-active')
const burger = document.querySelector('.user-list__item-menu')


function toggleMenu(){
    menuActive.classList.toggle('hidden-m');
}

burger.addEventListener('click', toggleMenu);

