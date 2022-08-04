
// Открыть модальном
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Закрыть модальное
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides1(slideIndex);

// Вперед/назад контроль
function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide1(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("my-Slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
