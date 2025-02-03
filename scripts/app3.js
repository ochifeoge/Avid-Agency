import { apprasials } from "./comments.js";
function loadPage() {
  // LENTIS SMOOTH SCROLL CODE
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Show preloader and disable scrolling
  document.body.classList.add("loading");
  window.scrollTo(0, 0); // Prevent initial scroll

  // Define the preloader percentage update variables
  let percent = 0;
  const percentText = document.getElementById("loader-percent");
  const preloader = document.querySelector(".preloader");

  // Get total number of images and videos
  const totalAssets =
    document.images.length + document.querySelectorAll("video").length;
  let loadedAssets = 0;

  // Function to update the percentage
  function updateProgress() {
    percent = Math.floor((loadedAssets / totalAssets) * 100);
    percentText.textContent = percent + "%";

    if (percent >= 100) {
      // Once the loading is complete, trigger GSAP animations
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");

      // Start GSAP animations
      const timeline = gsap.timeline();
      timeline
        .from("header", {
          marginTop: "-100px",
          opacity: 0,
          duration: 2,
          ease: "linear",
        })
        .from(".hero-text", {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.5,
        })
        .from(".hero-video", {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        })
        .from(
          [".animate-text", ".js-toggle-free", ".check-item"], // Select the p, a, and check items
          {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3, // Creates a stagger effect between elements
          },
          "+=0.2" // Delay after the video finishes
        );
    }
  }

  // Track asset loading and update the progress
  function assetLoaded() {
    loadedAssets += 1;
    updateProgress();
  }

  // Track images
  const assets = document.images;
  for (let i = 0; i < assets.length; i++) {
    if (assets[i].complete) {
      assetLoaded(); // If already loaded
    } else {
      assets[i].addEventListener("load", assetLoaded); // Track when each image loads
      assets[i].addEventListener("error", assetLoaded); // In case the image fails to load
    }
  }

  // Track videos
  const videos = document.querySelectorAll("video");
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].readyState >= 3) {
      // Check if video is already buffered
      assetLoaded();
    } else {
      videos[i].addEventListener("loadeddata", assetLoaded); // When video is ready
    }
  }

  // SWIPER JS CODE
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    zoom: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true, // Add this line for better pagination on small screens
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  // Clear the form after submission

  const submitBtns = document.querySelectorAll(".js-submit-btn");

  submitBtns.forEach((submitBtn) => {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const successMessage = document.querySelector(".successMessage");

      successMessage.classList.add("active");

      setTimeout(() => {
        successMessage.classList.remove("active");

        const form = submitBtn.closest("form"); // Find the form closest to the button
        form.submit(); // Submit the form
      }, 5000);
    });
  });

  // Scroll animation
  window.addEventListener("scroll", () => {
    if (!play) {
      increamentAnimation();
    }
  });

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

  // TESTIMONIAL COMMENTS SECTION
  let html = "";
  apprasials.forEach((apprasial) => {
    html += `
       <div class="swiper-slide swiper-slideT">
                  <div class="client">
                    <div class="client-info">
                      <h4>${apprasial.name}</h4>
                      <div class="" style="color: gold">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                  </div>
                  <q class="text">${apprasial.comment}</q>
                </div>
    `;
  });
  document.querySelector(".js-comments").innerHTML = html;
}
window.addEventListener("DOMContentLoaded", loadPage);
