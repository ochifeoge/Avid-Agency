const header = document.querySelector("header");

function scrollAnimation() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
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

// portfolio filter animation

let mixer = mixitup(".portfolio-gallery");
