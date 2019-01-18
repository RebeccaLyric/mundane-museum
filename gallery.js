// Gallery Lightbox Functions
// Open the lightbox
function openModal() {
    document.getElementById('galleryLightbox').style.display = "block";
}

// Close the lightbox
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("galleryLightbox").style.display = "none";
};

function closeLightbox() {
    document.getElementById('galleryLightbox').style.display = "none";
}

// Run lightbox
let slideIndex = 1;
showSlides(slideIndex);

// Current, next/previous controls for lightbox
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides in lightbox
function showSlides(n) {
    let slides = document.getElementsByClassName("lightboxSlides");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {                               //if at last slide
        slideIndex = 1}                                    //go to beginning

    if (n < 1) {                                           //if at first slide
        slideIndex = slides.length}                        //go to last

    for (let i = 0; i < slides.length; i++) {              //hide each slide
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";          //display current slide
    captionText.innerHTML = slides[slideIndex-1].title;    //display caption
}
