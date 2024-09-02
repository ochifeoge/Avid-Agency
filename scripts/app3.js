const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  zoom: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const header = document.querySelector(".nav-header");

function scrollAnimation() {
  header.classList.toggle("glass", window.pageYOffset > 0);
}
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

// portfolio filter animation

let mixer = mixitup(".portfolio-gallery");
