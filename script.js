const navBurger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');


navBurger.addEventListener('click', () => {
   navLinks.classList.toggle('nav-links');

   navBurger.classList.toggle('nav-burger');
})

