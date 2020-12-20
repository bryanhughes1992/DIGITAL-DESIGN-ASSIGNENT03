window.onload = function() {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "flex";
        setTimeout(showSlides, 4000);
    }

    var leftArrow = document.getElementById('arrowLeft');
    var rightArrow = document.getElementById('arrowRight');
    leftArrow.ontouchstart = plusSlides(-1);
    rightArrow.ontouchstart = plusSlides(1);

};
