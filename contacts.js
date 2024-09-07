let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

// Animation
//Scroll animation for about section 
document.addEventListener('DOMContentLoaded', function() {
   const boxes = document.querySelector('.about .boxes');
   // const email = document.querySelector('.about .boxes .Email');
   // const phone = document.querySelector('.about .boxes .phone');

   const aboutSection = document.getElementById('about');

   function checkAnimation() {
       const triggerBottom = window.innerHeight / 5 * 4;
       const aboutTop = aboutSection.getBoundingClientRect().top;

       if (aboutTop < triggerBottom) {
         boxes.classList.add('animate');
         //   email.classList.add('animate');
         //   phone.classList.add('animate');
       } else {
         boxes.classList.remove('animate');
         //   email.classList.remove('animate');
         //   phone.classList.remove('animate');
       }
   }

   window.addEventListener('scroll', checkAnimation);

   // Initial check to see if the section is already in view
   checkAnimation();
});



// scroll animation of about us section end

document.addEventListener('DOMContentLoaded', function() {
   const img= document.querySelector('.contact .row .img');
   const login_form = document.querySelector('.contact .row .login_form');

   const aboutSection = document.getElementById('contact');

   function checkAnimation() {
       const triggerBottom = window.innerHeight / 5 * 4;
       const aboutTop = aboutSection.getBoundingClientRect().top;

       if (aboutTop < triggerBottom) {
           img.classList.add('animate');
           login_form.classList.add('animate');
       } else {
           img.classList.remove('animate');
           login_form .classList.remove('animate');
       }
   }

   window.addEventListener('scroll', checkAnimation);

   // Initial check to see if the section is already in view
   checkAnimation();
});
// scroll animation of services section end