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
        backgroundColor: "#222", // color gris oscuro
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

//section 2 .dos
let dosh1 = document.querySelector(".dos h1")

gsap.from(dosh1, {
    opacity: 0,
    scale: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".dos",
        start: "top+=1 top",
        end: "+=900",
        scrub: true,
        // pin: true,
        markers: true,
        invalidateOnRefresh: true
    }
})