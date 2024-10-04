gsap.registerPlugin(ScrollTrigger);

// Timeline for section one (animation of .fanta, .orange-cut, .orange, etc.)
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true // Enable markers for debugging
  }
});

// Animate elements as they move out of view
tl1.to(".fanta", { top: "120%", left: "0%" }, 'orange')
  .to(".orange-cut", { top: "160%", left: "23%" }, 'orange')
  .to(".orange", { width: "15%", top: "160%", right: "10%" }, 'orange')
  .to(".leaf", { top: "110%", rotate: "130deg", left: "70%" }, 'orange')
  .to(".leaf2", { top: "110%", rotate: "130deg", left: "0%" }, 'orange');

// Timeline for section two (lemon, pepsi, sprite, etc.)
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true // Enable markers for debugging
  }
});

// Animating the lemon, coca-cola, and pepsi images
tl2.from(".lemon", { rotate: "-90deg", left: "-100%", top: "110%" }, 'ca')
  .from(".cocacola", { rotate: "-90deg", top: "110%", left: "-100%" }, 'ca')
  .from(".lemon", { rotate: "90deg", left: "100%", top: "110%" }, 'ca')
  .from(".pepsi", { rotate: "90deg", top: "110%", left: "100%" }, 'ca')
  .to(".orange-cut", { width: "18%", left: "42%", top: "204%" }, 'ca')
  .to(".fanta", { width: "35%", top: "210%", left: "33%" }, 'ca');
