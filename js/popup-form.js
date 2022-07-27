var modalWindow = document.getElementById('modal-1');
var btn = document.getElementById("catalog-btn-open");
var btn2 = document.getElementById("catalog-btn-open-2");
var btn3 = document.getElementById("catalog-btn-open-3");
var btn4 = document.getElementById("catalog-btn-open-4");
var btn5 = document.getElementById("catalog-btn-open-5");
var btn6 = document.getElementById("catalog-btn-open-6");
var span = document.getElementsByClassName("popup-close-btn")[0];

btn.onclick = function() {
   modalWindow.style.display = "block";
 }
btn2.onclick = function() {
    modalWindow.style.display = "block";
}
btn3.onclick = function() {
    modalWindow.style.display = "block";
}
btn4.onclick = function() {
    modalWindow.style.display = "block";
}
btn5.onclick = function() {
    modalWindow.style.display = "block";
}
btn6.onclick = function() {
    modalWindow.style.display = "block";
}
 span.onclick = function() {
   modalWIndow.style.display = "none";
 }
 window.onclick = function(event) {
   if (event.target == modal) {
     modalWIndow.style.display = "none";
   }
 }


