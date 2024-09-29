function loadPage() {
  gsap.utils.toArray(".ani-about-card").forEach((card) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: card, // Trigger each card individually
        start: "top 80%", // Animation starts when the top of the card hits 80% of the viewport
        end: "bottom 80%", // Animation ends when the bottom of the card hits 80% of the viewport
        scrub: true, // Sync animation with scrolling
        markers: false, // Disable markers for production
        toggleActions: "play none none reverse", // Play when entering, reverse when leaving
      },
    });

    // Animation for each card
    tl.from(card, {
      y: 150, // Move the card up
      opacity: 0, // Fade in from 0 to 1
      duration: 1,
      ease: "power2.out", // Smooth easing for the movement
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
