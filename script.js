document.addEventListener("DOMContentLoaded", function() {

  let currentIndex = 0;
  const testimonialItems = document.querySelectorAll('.testimonial-item');

  function showTestimonial(index) {
    testimonialItems.forEach(item => {
      item.style.display = 'none';
    });

    currentIndex += index;

    if (currentIndex < 0) {
      currentIndex = testimonialItems.length - 1;
    } else if (currentIndex >= testimonialItems.length) {
      currentIndex = 0;
    }

    testimonialItems[currentIndex].style.display = 'block';
  }

  function changeTestimonial(index) {
    showTestimonial(index);
  }

  showTestimonial(0);

  document.querySelector('.prev').addEventListener('click', function() {
    changeTestimonial(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
    changeTestimonial(1);
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});