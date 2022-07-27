var modal = document.getElementById('modal-2');
var btn = document.getElementById("header-call-btn");
var span = document.getElementsByClassName("popup-2-close-btn")[0];

btn.onclick = function() {
   modal.style.display = "block";
 }
 span.onclick = function() {
   modal.style.display = "none";
 }
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }