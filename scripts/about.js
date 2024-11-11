function loadPage() {
  // Animate image from the left
  gsap.from(".img-left", {
    x: -300, // Move image in from the left (-300px off-screen)
    opacity: 0, // Start with 0 opacity
    duration: 1.2, // Duration of the animation
    ease: "power2.out", // Smooth easing effect
  });

  // Animate text from the right
  gsap.from(".text-right", {
    x: 300, // Move paragraph in from the right (300px off-screen)
    opacity: 0, // Start with 0 opacity
    duration: 1.2, // Match the duration with the image
    ease: "power2.out", // Smooth easing effect
    delay: 0.2, // Optional: Add a slight delay so they don't animate at the same exact time
  });

  gsap.utils.toArray(".ani-about-card").forEach((card) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: card, // Trigger each card individually
        start: "top 80%", // Animation starts when the top of the card hits 80% of the viewport
        end: "bottom 85%", // Animation ends when the bottom of the card hits 80% of the viewport
        scrub: true, // Sync animation with scrolling
        markers: false, // Disable markers for production
        toggleActions: "play none none reverse", // Play when entering, reverse when leaving
      },
    });

    // Animation for each card
    tl.from(card, {
      y: 100,
      z: -300,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
  // Lenis Smooth Scroll Code
  const lenis = new Lenis({
    smooth: true, // Enables smooth scrolling
    duration: 1.2, // Optional: Customize duration of scroll for smoothness
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional easing function for scroll
  });

  // Update Lenis on scroll
  lenis.on("scroll", (e) => {
    ScrollTrigger.update(); // Update GSAP ScrollTrigger on Lenis scroll
  });

  // Use GSAP's ticker to sync with Lenis' scroll frame update
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Pass time in milliseconds to Lenis' RAF method
  });

  // Optional: Turn off GSAP lag smoothing for smoother animation
  gsap.ticker.lagSmoothing(0);
}
loadPage();

//ABOUT US PAGE

/* const paraIntro = document.querySelector(".intro");

const toggleBtn = document.querySelector(".js-toggle-about");

toggleBtn.addEventListener("click", () => {
  paraIntro.classList.toggle("hidden");
  if (!paraIntro.classList.contains("hidden")) {
    toggleBtn.innerText = "Read Less";
  } else {
    toggleBtn.innerText = "Read More...";
  }
}); */
