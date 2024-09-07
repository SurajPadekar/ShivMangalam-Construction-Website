// service
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
 });
 
 
 
 document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
      );
    }
 
    function toggleAnimationOnScroll() {
      var elements = document.querySelectorAll('.service-details');
      elements.forEach(function(el, index) {
        if (isElementInViewport(el)) {
          if (index % 2 === 0) {
            el.classList.add('slide-in-left');
          } else {
            el.classList.add('slide-in-right');
          }
        }
      });
    }
 
    window.addEventListener('scroll', toggleAnimationOnScroll);
    toggleAnimationOnScroll(); // Initial check
  });
  