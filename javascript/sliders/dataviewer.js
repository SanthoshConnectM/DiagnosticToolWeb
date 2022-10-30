let slideDataViewIndex = 1;
showDataViewSlides(slideDataViewIndex);
function currentDataViewSlide(n) {
    showDataViewSlides(slideDataViewIndex = n);
}
function showDataViewSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myDataViewSlides");
    let dots = document.getElementsByClassName("dataviewdot");
    if (n > slides.length) { slideDataViewIndex = 1 }
    if (n < 1) { slideDataViewIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideDataViewIndex - 1].style.display = "block";
    dots[slideDataViewIndex - 1].className += " active";
}