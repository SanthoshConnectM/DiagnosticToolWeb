let slideDataLoggingIndex = 1;
showDataLoggingSlides(slideDataLoggingIndex);
function currentDataLoggingSlide(n) {
    showDataLoggingSlides(slideDataLoggingIndex = n);
}
function currentDataLoggingSlide(n) {
    let i;
    let slides = document.getElementsByClassName("myDataLoggingSlides");
    let dots = document.getElementsByClassName("dataloggingdot");
    if (n > slides.length) { slideDataLoggingIndex = 1 }
    if (n < 1) { slideDataLoggingIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideDataLoggingIndex - 1].style.display = "block";
    dots[slideDataLoggingIndex - 1].className += " active";
}