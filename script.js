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

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
});

var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");
var modalImg = document.getElementById("modalImage");
var body = document.body;
var isModalOpen = false;

function openModal(imgSrc) {
  modal.style.display = "flex";
  modalImg.src = imgSrc;

  body.classList.add('modal-open');
  modalContent.classList.add('modal-enlarged');

  var closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.innerHTML = "&times;";
  closeSpan.onclick = closeModal;
  modalContent.appendChild(closeSpan);

  isModalOpen = true;
}

function closeModal() {
  modal.style.display = "none";
  body.classList.remove('modal-open');
  modalContent.classList.remove('modal-enlarged');

  var closeSpan = document.querySelector(".close");
  if (closeSpan) {
    modalContent.removeChild(closeSpan);
  }

  isModalOpen = false;
}