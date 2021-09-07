const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.strokeStyle = "red";
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(200, 100);
// ctx.lineTo(100, 150);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

// x = width, y = height, r = radius, c = color
function Circle(x, y, r, c) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.c = c;

	this.dx = Math.random() * 4 + 1;
	this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	this.dy = Math.random() * 4 + 1;
	this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

	this.draw = function () {
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.strokeStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		// ctx.fill();
		ctx.stroke();
	};

	this.animate = function () {
		this.x += this.dx;
		this.y += this.dy;

		if (this.x + this.r > canvas.width || this.x - this.r < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.r > canvas.height || this.y - this.r < 0) {
			this.dy = -this.dy;
		}

		this.draw();
	};
}

// let ball = new Circle(200, 200, 80, "blue");
// ball.draw();

const balls = [];
for (let i = 0; i < 15; i++) {
	let r = Math.floor(Math.random() * 30) + 15;
	let x = Math.random() * (canvas.width - r * 2) + r;
	let y = Math.random() * (canvas.height - r * 2) + r;
	let c = "#01DC82";
	balls.push(new Circle(x, y, r, c));
}

function Update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < balls.length; i++) {
		balls[i].animate();
	}
	requestAnimationFrame(Update);
}

Update();
