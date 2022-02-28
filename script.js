const navBurger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');


navBurger.addEventListener('click', () => {
   navLinks.classList.toggle('nav-links');
   navLinks.classList.toggle('active');

 //navLinks.classList.remove('active');    
 //navBurger.classList.toggle('active');
}) 

/*const toggleNav = () => {
   navLinks.classList.toggle('nav-links');
   navLinks.classList.add("active");
}

navBurger.addEventListener('click', toggleNav); */

