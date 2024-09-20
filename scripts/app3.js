// LENTIS SMOOTH SCROOLCODE
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// SWIPER JS CODE
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

/* const header = document.querySelector(".nav-header");

function scrollAnimation() {
  header.classList.toggle("glass", window.pageYOffset > 0);
}
scrollAnimation();
window.addEventListener("scroll", scrollAnimation); */

// CODE FOR CLEARING THE FORM AFTER SUBMISSION

function resetInputValue() {
  document.querySelectorAll(".js-form-message").forEach((inputSection) => {
    inputSection.value = "";
  });
}

// portfolio filter animation

let mixer = mixitup(".portfolio-gallery");

// scroll animation
window.addEventListener("scroll", () => {
  if (!play) {
    increamentAnimation();
  }
});

// responsible for updating the count from 0 t0 targer number
function updateCount(startNum, targetNum) {
  let currentNum = +startNum.innerText;
  if (currentNum < targetNum) {
    startNum.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(startNum, targetNum);
    }, 12);
  }
}

const incrementingNumber = document.querySelectorAll(".number-count");
const elInView = document.querySelector(".el-in-vh");

let play = false;
function increamentAnimation() {
  if (!hasReached()) {
    return;
  }
  play = true;
  incrementingNumber.forEach((num) => {
    const target = +num.dataset.targetNumber;

    setTimeout(() => {
      updateCount(num, target);
    }, 1000);
  });
}

// checking if the element has reached the viewport and is visible
function hasReached() {
  let topPosition = elInView.getBoundingClientRect().top;
  if (window.innerHeight >= topPosition) {
    return true;
  } else return false;
}

// Free Guide

const guideToggle = document.querySelector(".js-toggle-free");
const guideEl = document.querySelector(".free-guide");

guideToggle.addEventListener("click", () => {
  guideEl.classList.toggle("display");
});
