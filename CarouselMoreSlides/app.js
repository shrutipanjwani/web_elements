// const buttonsWrapper = document.querySelector(".map");
// const slides = document.querySelector(".inner");

// buttonsWrapper.addEventListener("click", e => {
//   if (e.target.nodeName === "BUTTON") {
//     Array.from(buttonsWrapper.children).forEach(item =>
//       item.classList.remove("active")
//     );
//     if (e.target.classList.contains("first")) {
//       slides.style.transform = "translateX(-0%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains("second")) {
//       slides.style.transform = "translateX(-33.33333333333333%)";
//       e.target.classList.add("active");
//     } else if (e.target.classList.contains('third')){
//       slides.style.transform = 'translatex(-66.6666666667%)';
//       e.target.classList.add('active');
//     }
//   }
// });


//Another 3D

(function() {
    "use strict";
  
    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel-slider')[0],
        items = carousel.getElementsByClassName('carousel-slider-item'),
        prevBtn = carousel.getElementsByClassName('carousel-prev')[0],
        nextBtn = carousel.getElementsByClassName('carousel-next')[0];
    
    var width, height, totalWidth, margin = 20,
        currIndex = 0,
        interval, intervalTime = 4000;
    
    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();
      
        timer();
    }
    
    function resize() {
        width = Math.max(window.innerWidth * .25, 275),
        height = window.innerHeight * .5,
        totalWidth = width * items.length;
      
        slider.style.width = totalWidth + "px";
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.width = (width - (margin * 2)) + "px";
            item.style.height = height + "px";
        }
    }
    
    function move(index) {
      
        if(index < 1) index = items.length;
        if(index > items.length) index = 1;
        currIndex = index;
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i],
                box = item.getElementsByClassName('item-3d-frame')[0];
            if(i == (index - 1)) {
                item.classList.add('carousel-slider-item-active');
                box.style.transform = "perspective(1200px)"; 
            } else {
              item.classList.remove('carousel-slider-item-active');
                box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
            }
        }
      
        slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }
    
    function timer() {
        clearInterval(interval);    
        interval = setInterval(() => {
          move(++currIndex);
        }, intervalTime);    
    }
    
    function prev() {
      move(--currIndex);
      timer();
    }
    
    function next() {
      move(++currIndex);    
      timer();
    }
    
    
    function bindEvents() {
        window.onresize = resize;
        prevBtn.addEventListener('click', () => { prev(); });
        nextBtn.addEventListener('click', () => { next(); });    
    }

    init();
    
  })();