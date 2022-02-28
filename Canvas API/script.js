"use strict";

let colorCircle = document.querySelectorAll(".color-circle");
let downloadBtn = document.querySelector(".download-btn");
let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("#render");
let c = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
	isDrawing = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
	draw(event.offsetX, event.offsetY);
});

c.fillStyle = "pink";
c.strokeStyle = c.fillStyle;

function draw(x2, y2) {
	if (isDrawing) {
		c.beginPath();
		c.arc(x2, y2, penSize, 0, Math.PI * 2);
		c.closePath();
		c.fill();
		// Draw a line
		drawLine(x, y, x2, y2);
		// getDrawing();
	}
	x = x2;
	y = y2;
}

function drawLine(x1, y1, x2, y2) {
	c.beginPath();
	c.moveTo(x1, y1);
	c.lineTo(x2, y2);
	c.strokeStyle = c.fillStyle;
	c.lineWidth = penSize * 2;
	c.stroke();
}

function saveDrawing() {
	localStorage.setItem(canvas, canvas.toDataURL());
}

getDrawing();

function getDrawing() {
	var dataURL = localStorage.getItem(canvas);
	var img = new Image();
	img.src = dataURL;
	img.onload = function () {
		c.drawImage(img, 0, 0);
	};
}

function clearDrawing() {
	c.clearRect(0, 0, canvas.width, canvas.height);
}

const selectColor = (elem) => {
	removeActiveCircleColor();
	c.fillStyle = elem.getAttribute("data-color");
	elem.classList.add("active");
};

const removeActiveCircleColor = () => {
	colorCircle.forEach((circle) => {
		circle.classList.remove("active");
	});
};

function penSizeChange(pensize) {
	penSize = pensize;
}

const favColor = (elem) => {
	removeActiveCircleColor();
	c.fillStyle = elem.value;
};

downloadBtn.addEventListener(
	"click",
	(event) => (event.target.href = canvas.toDataURL())
);

// Navbar Scrolling Animation
window.addEventListener("scroll", function () {
	let nav = document.querySelector("nav");
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle("scrolling-active", windowPosition);
});

// Navbar Responsive
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
	//Animate Links
	navLinks.classList.toggle("open");
	links.forEach((link) => {
		link.classList.toggle("fade");
	});

	//Hamburger Animation
	hamburger.classList.toggle("toggle");
	window.scrollTo(0, 0);
});

document.addEventListener("click", (e) => {
	if (e.target.closest(".nav .nav-links")) {
		hamburger.classList.remove("toggle");
		navLinks.classList.remove("open");
		links.forEach((link) => {
			link.classList.remove("fade");
		});
	}
});

// //mouse position
// let mouseX,
// 	mouseY,
// 	isDragging = false;

// //Canvas
// class Canvas {
// 	constructor() {
// 		//html canvas
// 		this.canvas = document.getElementById("render");
// 		//context
// 		this.ctx = this.canvas.getContext("2d");
// 		//dimensions
// 		this.width = this.canvas.width = 1000;
// 		this.height = this.canvas.height = 500;
// 		//Points that make up the simple design
// 		//He goes to look in the localstorage, if he does not find it he creates a simple array
// 		this.points = this.getDrawing() || [];
// 		//color
// 		this.color = "black";
// 		this.weight = 5;
// 	}

// 	update() {
// 		//If the user is dragging the mouse inside the canvas, he creates points
// 		if (isDragging) {
// 			if (
// 				mouseX >= 0 &&
// 				mouseX <= this.width &&
// 				mouseY >= 0 &&
// 				mouseY <= this.height
// 			) {
// 				this.points.push({
// 					x: mouseX,
// 					y: mouseY,
// 				});
// 			}
// 		}
// 	}
// 	draw() {
// 		//delete the background
// 		this.ctx.clearRect(0, 0, this.height, this.width);
// 		//set the color
// 		this.ctx.fillStyle = this.color;
// 		//draw points
// 		for (let point of this.points) {
// 			this.ctx.save();
// 			this.ctx.translate(point.x, point.y);
// 			this.ctx.beginPath();
// 			this.ctx.arc(0, 0, this.weight, 0, 2 * Math.PI, true);
// 			this.ctx.fill();
// 			this.ctx.restore();
// 		}
// 	}
// 	//save in the localstorage the points that make up the design
// 	saveDrawing() {
// 		const json = JSON.stringify(this.points);
// 		localStorage.setItem("drawing", json);
// 	}
// 	//search for points in the localstorage
// 	getDrawing() {
// 		return JSON.parse(localStorage.getItem("drawing"));
// 	}
// 	//clean the drawing pad
// 	clearDrawing() {
// 		this.points = [];
// 	}
// }

// //Canvas
// const canvas = new Canvas();

// //Events
// window.addEventListener("mousemove", (event) => {
// 	let rect = canvas.canvas.getBoundingClientRect();
// 	mouseX = event.clientX - rect.left;
// 	mouseY = event.clientY - rect.top;
// });
// window.addEventListener("mousedown", () => (isDragging = true));
// window.addEventListener("mouseup", () => (isDragging = false));

// //main function in loop
// function main() {
// 	canvas.update();
// 	canvas.draw();

// 	requestAnimationFrame(main);
// }
// //The program starts here
// main();
