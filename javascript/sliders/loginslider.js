let slideLoginIndex = 1;
showLoginSlides(slideLoginIndex);
function currentLoginSlide(n) {
    showLoginSlides(slideLoginIndex = n);
}
function showLoginSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myLoginSlides");
    let dots = document.getElementsByClassName("logindot");
    if (n > slides.length) { slideLoginIndex = 1 }
    if (n < 1) { slideLoginIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideLoginIndex - 1].style.display = "block";
    dots[slideLoginIndex - 1].className += " active";
}