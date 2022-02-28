// traversy media
let sliderImages = document.querySelectorAll(".slide"),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right"),
	current = 0;

// Clear all images
function reset() {
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
}
// Init Slider
function startSlide() {
	reset();
	sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = "block";
	current--;
}

// Show next
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = "block";
	current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});

startSlide();

//auto play
setInterval(slideRight, 3000);

// w3 school

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// 	showSlides((slideIndex += n));
// }

// function currentSlide(n) {
// 	showSlides((slideIndex = n));
// }

// function showSlides(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("carousel-slide");
// 	var dots = document.getElementsByClassName("carousel-indicator");
// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}
// 	// for loop for slides
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	// for loop for dots
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" current-slide", "");
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " current-slide";
// }

// Automatic Slides
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
