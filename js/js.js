gsap.from(".arrow1", { opacity: 0, duration: 2, repeat: -1 });
gsap.from(".arrow2", { opacity: 0, duration: 2, delay: 0.1, repeat: -1 });
gsap.from(".arrow3", { opacity: 0, duration: 2, delay: 0.2, repeat: -1 });

gsap.registerPlugin(ScrollTrigger);
gsap.from(".benefit__first", {
  opacity: 0,
  duration: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".dan__hoffman-btn",
    start: "botom center",
  },
});
console.log(ScrollTrigger.version);
gsap.from(".benefit__second", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".dan__hoffman-btn",
    start: "botom center",
  },
});
gsap.from(".benefit__third", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: 200,
  scrollTrigger: {
    trigger: ".dan__hoffman-btn",
    start: "botom center",
  },
});

gsap.to(".promise__Straightforward", {
  opacity: 0,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});
gsap.to(".promise__Inviting", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});
gsap.to(".promise__Inspiring", {
  opacity: 0,
  delay: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});
gsap.to(".promise__Direct", {
  opacity: 0,
  delay: 3,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});
gsap.to(".promise__Eye-Level", {
  opacity: 0,
  delay: 4,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});

gsap.to(".promise__Walk", {
  opacity: 0,
  delay: 5,
  duration: 1,
  scrollTrigger: {
    trigger: ".promise__subtitle",
    start: "top top",
  },
});

gsap.from(".logo__left-img", {
  duration: 0.5,
  delay: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".logo__title",
    start: "bottom bottom",
  },
});
gsap.to(".logo__left-img", {
  duration: 2,
  delay: 1,
  y: -1050,
  scrollTrigger: {
    trigger: ".logo__title",
    start: "bottom bottom",
  },
});
gsap.to(".logo__left-img", {
  opacity: 0,
  delay: 2.5,
  scrollTrigger: {
    trigger: ".logo__title",
    start: "bottom bottom",
  },
});
gsap.from(".logo__title", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".logo__title",
    start: "bottom bottom",
  },
});
gsap.from(".logo__text", {
  opacity: 0,
  duration: 5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".logo__title",
    start: "bottom bottom",
  },
});

gsap.from(".logo__before", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".logo__vide",
    start: "bottom bottom",
  },
});
gsap.from(".logo__after", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".logo__vide",
    start: "bottom bottom",
  },
});

gsap.from(".color__title", {
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "top center",
  },
});
gsap.from(".color__text", {
  opacity: 0,
  delay: 1,
  duration: 5,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "top center",
  },
});

gsap.from(".color__Deep-Ocean", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__Cobalt-Marine", {
  opacity: 0,
  delay: 0.5,
  duration: 1,
  x: -200,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__hallow-Water", {
  opacity: 0,
  delay: 1,
  duration: 1,
  x: -200,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__Golden-Coast", {
  opacity: 0,
  delay: 1.5,
  duration: 1,
  x: -200,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__Crimson-Twilight", {
  opacity: 0,
  delay: 2,
  duration: 1,
  x: -200,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__Blue-Gradient", {
  opacity: 0,
  delay: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});
gsap.from(".color__Crimson-Gold-Gradient", {
  opacity: 0,
  delay: 2.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".logo__after",
    start: "bottom center",
  },
});

gsap.from(".merchandise__duga", {
  duration: 1,
  y: -400,
  scrollTrigger: {
    trigger: ".color__Crimson-Gold-Gradient",
    start: "top center",
  },
});
gsap.to(".merchandise__duga", {
  duration: 2,

  y: 1300,
  scrollTrigger: {
    trigger: ".color__Crimson-Gold-Gradient",
    start: "top center",
  },
});
gsap.to(".merchandise__duga", {
  duration: 2,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: ".color__Crimson-Gold-Gradient",
    start: "top center",
  },
});

gsap.from(".merchandise__white-cont", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".merchandise__title",
    start: "top center",
  },
});
gsap.from(".merchandise__red-cont", {
  opacity: 0,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".merchandise__title",
    start: "top center",
  },
});
gsap.from(".merchandise__cup", {
  opacity: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".merchandise__title",
    start: "top center",
  },
});
gsap.from(".merchandise__notebook", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".merchandise__title",
    start: "top center",
  },
});
gsap.from(".merchandise__pen", {
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: ".merchandise__title",
    start: "top center",
  },
});

gsap.from(".website__macbook", {
  duration: 1,
  y: -200,
  scrollTrigger: {
    trigger: ".merchandise__pen",
    start: "top top",
  },
});
gsap.from(".website__background", {
  duration: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".merchandise__pen",
    start: "top top",
  },
});
gsap.from(".website__title", {
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".website__macbook",
    start: "top center",
  },
});
gsap.from(".website__text", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".website__macbook",
    start: "top center",
  },
});
