const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
	cursor.setAttribute(
		"style",
		"top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
	);
});
document.addEventListener("click", () => {
	cursor.classList.add("expand");

	setTimeout(() => {
		cursor.classList.remove("expand");
	}, 500);
});

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "!<>-_\\/[]{}—=+*^?#________";
		this.update = this.update.bind(this);
	}
	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise((resolve) => (this.resolve = resolve));
		this.queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}
	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomChar();
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}

const createTextScramble = (
	selector,
	phrases,
	delay = 3000,
	initialDelay = 0
) => {
	const el = document.querySelector(selector);
	if (!el) return;

	const fx = new TextScramble(el);
	let counter = 0;

	const next = () => {
		fx.setText(phrases[counter]).then(() => {
			if (phrases.length > 1) {
				setTimeout(next, delay);
			}
		});
		counter = (counter + 1) % phrases.length;
	};

	setTimeout(next, initialDelay);
};

// Initialize instances
createTextScramble(".bio", [
	"I'm an enthusiastic UI Developer with a strong desire to expand my knowledge and skills.",
	"I'm always eager to learn new technologies and stay up-to-date with industry trends.",
	"I'm passionate about creating user-friendly interfaces that provide a seamless user experience",
]);

createTextScramble(".name-b", ["I'm Abhijith"], 3000, 500);
createTextScramble(".name-a", ["Hello"], 3000, 500);
createTextScramble(".name-c", ["UI Developer"], 3000, 500);
