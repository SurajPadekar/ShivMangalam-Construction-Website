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

//Animations section
// let aboutUsSection=document.querySelectorAll('section');
// // let content=document.querySelector('.about .row .content');
// window.onscroll=()=>{
//    aboutUsSection.forEach(sec => {
//       let top=window.scrollY;
//       let offset=sec.offsetTop;
//       let height=sec.offsetHeight;

//       if(top>=offset && top<offset+height){
//          sec.classList.add('show-animate');
//       }
//       else{
//          sec.classList.remove('show-animate');
//       }
//    });
// }


//Scroll animation for about section 
document.addEventListener('DOMContentLoaded', function() {
   const videoContainer = document.querySelector('.about .row .video');
   const contentContainer = document.querySelector('.about .row .content');
   const box_container = document.querySelector('.about .box-container');

   const aboutSection = document.getElementById('about');

   function checkAnimation() {
       const triggerBottom = window.innerHeight / 5 * 4;
       const aboutTop = aboutSection.getBoundingClientRect().top;

       if (aboutTop < triggerBottom) {
           videoContainer.classList.add('animate');
           contentContainer.classList.add('animate');
           box_container.classList.add('animate');
       } else {
           videoContainer.classList.remove('animate');
           contentContainer.classList.remove('animate');
           box_container.classList.remove('animate');
       }
   }

   window.addEventListener('scroll', checkAnimation);

   // Initial check to see if the section is already in view
   checkAnimation();
});
// scroll animation of about us section end


//Scroll animation for about section 
document.addEventListener('DOMContentLoaded', function() {
   const box_container = document.querySelector('.services .box-container');

   const aboutSection = document.getElementById('services');

   function checkAnimation() {
       const triggerBottom = window.innerHeight / 5 * 4;
       const aboutTop = aboutSection.getBoundingClientRect().top;

       if (aboutTop < triggerBottom) {
           box_container.classList.add('animate');
       } else {
           box_container.classList.remove('animate');
       }
   }

   window.addEventListener('scroll', checkAnimation);

   // Initial check to see if the section is already in view
   checkAnimation();
});
// scroll animation of about us section end

//Scroll animation for services section 
document.addEventListener('DOMContentLoaded', function() {
   const map= document.querySelector('.contact .row .map');
   const login_form = document.querySelector('.contact .row .login_form');

   const aboutSection = document.getElementById('contact');

   function checkAnimation() {
       const triggerBottom = window.innerHeight / 5 * 4;
       const aboutTop = aboutSection.getBoundingClientRect().top;

       if (aboutTop < triggerBottom) {
           map.classList.add('animate');
           login_form.classList.add('animate');
       } else {
           map.classList.remove('animate');
           login_form .classList.remove('animate');
       }
   }

   window.addEventListener('scroll', checkAnimation);

   // Initial check to see if the section is already in view
   checkAnimation();
});
// scroll animation of services section end


