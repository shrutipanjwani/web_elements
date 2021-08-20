let slides = document.querySelectorAll(".slide-container");
let index = 0;

// function next
function next() {
	slides[index].classList.remove("active");
	index = (index + 1) % slides.length;
	slides[index].classList.add("active");
}

// function previous
function prev() {
	slides[index].classList.remove("active");
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add("active");
}

//auto play
setInterval(next, 3000);
