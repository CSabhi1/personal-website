

const content = document.querySelector('section');

setTimeout(() => {
    const t1 = gsap.timeline();
    t1.to('.content', {
        display:'block',
        duration:.01,
    })
  }, "100");

setTimeout(() => {
    const t1 = gsap.timeline();
    t1.to('.content', {
        display:'block',
        duration:.01,
    })
    t1.to('svg', {
        scale:0,
        duration:.2
    });
    t1.to('.blinder-container', {
        scaleY:0,
        duration:.3,
        ease:'power3.out',
        zIndex:-1
    })
    t1.to('.loader', {
        zIndex:-1
    })
    t1.to('h1', {
        y:0,
        stagger:.3,
        duration:2,
        ease:'power4.out',
    })
  }, "600");