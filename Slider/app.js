var btn = document.querySelectorAll(".btn");
var slide = document.querySelector("#slide");

btn[0].onclick = function () {
	slide.style.transform = "translateX(0px)";
	for (i = 0; i < 3; i++) {
		btn[i].classList.remove("active");
	}
	this.classList.add("active");
};

btn[1].onclick = function () {
	slide.style.transform = "translateX(-32%)";
	for (i = 0; i < 3; i++) {
		btn[i].classList.remove("active");
	}
	this.classList.add("active");
};

btn[2].onclick = function () {
	slide.style.transform = "translateX(-65%)";
	for (i = 0; i < 3; i++) {
		btn[i].classList.remove("active");
	}
	this.classList.add("active");
};
