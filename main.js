'use strict';



// Click Contact me
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
 scrollIntoView('#contact');
});

// Home opacity
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Show arrow up
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );