var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("carousel-slide");
	var dots = document.getElementsByClassName("carousel-indicator");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	// for loop for slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// for loop for dots
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" current-slide", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " current-slide";
}

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
