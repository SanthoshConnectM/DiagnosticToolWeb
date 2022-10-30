let slideSessionIndex = 1;
showSessionSlides(slideSessionIndex);
function currentSessionSlide(n) {
    showSessionSlides(slideSessionIndex = n);
}
function showSessionSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySessionSlides");
    let dots = document.getElementsByClassName("sessoiondot");
    if (n > slides.length) { slideSessionIndex = 1 }
    if (n < 1) { slideSessionIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideSessionIndex - 1].style.display = "block";
    dots[slideSessionIndex - 1].className += " active";
}