// OPENS LIGHTBOX
function openLightbox() {
  document.getElementById("theLightbox").style.display = "block";
}
// OPENS LIGHTBOX
function closeLightbox() {
  document.getElementById("theLightbox").style.display = "none";
}

var imageNumber = 1;
showLightbox(imageNumber);

// THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
  showLightbox(imageNumber = n);
}
// BUTTON CONTROLS FOR LIGHTBOX FUNCTION
function slideButtons(n) {
  showLightbox(imageNumber += n);
}

// THIS OPERATES THE LIGHTBOX ELEMENTS ONCE ITS OPEN
function showLightbox(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var cap = document.getElementsByClassName("image");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {imageNumber = 1}
  if (n < 1) {imageNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[imageNumber-1].style.display = "block";
  captionText.innerHTML = cap[imageNumber-1].alt;
}