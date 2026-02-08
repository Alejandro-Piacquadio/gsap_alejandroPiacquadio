gsap.registerPlugin(ScrollTrigger);


// Section 1 .intro
const introTl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});

introTl.from(".lorem", {
    opacity: 0,
    y: 50,
    duration: 1
});

introTl.eventCallback("onComplete", () => {
    document.body.classList.remove("no-scroll");

    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "top+=2 top",
            end: "bottom top",
            scrub: 2.5,
            pin: true
        }
    });

    scrollTl.to(".lorem", {
        scale: 30,
        ease: "none"
    }).to(".lorem", {
        scale: 310,
        ease: "none"
    })

    gsap.to(".intro", {
        backgroundColor: "#222",
        scrollTrigger: {
            trigger: ".intro",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".intro", {
        backgroundColor: "black",
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".intro",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    ScrollTrigger.refresh();
});

gsap.set([".edif1", ".edif2", ".lamp"], { opacity: 0 });

const dosTl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
        trigger: ".dos",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
    }
});
dosTl.to([".edif1", ".edif2", ".lamp"], { autoAlpha: 1, duration: 1 }, 0);

const vw = window.outerWidth
const anchoRata = document.querySelector(".rata").offsetWidth
console.log(anchoRata)

gsap.fromTo(".rata",
  { x: 0 },
  {
    x: vw,
    scrollTrigger: {
      trigger: ".dos",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  }
);