var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

ShowImage(slideIndex);

function NextImage() {
    slideIndex++;
    slideIndex %= slides.length;
    ShowImage(slideIndex);
}

function PreviousImage() {
    slideIndex--;
    if(slideIndex < 0)
        slideIndex = slides.length - 1;
    slideIndex %= slides.length;
    ShowImage(slideIndex);
}

function ShowImage(n) {
    for(let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    slides[n].style.display = "block";
}