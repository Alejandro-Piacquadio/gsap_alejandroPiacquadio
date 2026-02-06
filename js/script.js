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

const dosTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".dos",
        start: "top top",
        end: "+=1000",
        scrub: 2,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        markers: true
    },
    defaults: { ease: "none" }
});

// Estado inicial
gsap.set([".edif1", ".edif2", ".lamp"], { autoAlpha: 0 });

// Timeline
dosTl
    // Aparecen edificios (puedes escalonar con stagger si quieres)
    .to([".edif1", ".edif2"], {
        autoAlpha: 1,
        duration: 0.8
    }, 0)

    // Luego aparece el hombre cuando los edificios ya están visibles
    .to(".lamp", {
        autoAlpha: 1,
        duration: 0.6
    }, ">");