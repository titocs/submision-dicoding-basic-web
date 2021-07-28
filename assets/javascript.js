var slideIndex = 1;
showSlides(slideIndex);

// tombol untuk next/previous slide
function geser_slide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var titik = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i<titik.length; i++) {
        titik[i].className = titik[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
        titik[slideIndex-1].className += " active";
}


