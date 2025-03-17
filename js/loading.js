const content = document.querySelector("section");

setTimeout(() => {
	const t1 = gsap.timeline();
	t1.to(".content", {
		display: "block",
		duration: 0.01,
	});
}, "100");

setTimeout(() => {
	const t1 = gsap.timeline();
	t1.to(".content", {
		display: "block",
		duration: 0.01,
	});
	t1.to("svg", {
		scale: 0,
		duration: 0.2,
	});
	t1.to(".blinder-container", {
		scaleY: 0,
		duration: 0.3,
		ease: "power3.out",
		zIndex: -1,
	});
	t1.to(".loader", {
		zIndex: -1,
	});
	t1.to("h1", {
		y: 0,
		stagger: 0.3,
		duration: 2,
		ease: "power4.out",
	});
	VANTA.WAVES({
		el: ".landing-page",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		// minHeight: 200.0,
		// minWidth: 200.0,
		scale: 1.0,
		scaleMobile: 1.0,
		color: 0x0,
		shininess: 35.0,
		waveHeight: 7.0,
		waveSpeed: 0.75,
		zoom: 1.2,
	});
}, "600");
