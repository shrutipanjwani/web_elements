const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		const increment = target / speed;
		if (count < target) {
			counter.innerText = Math.ceil(count + increment);
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});
