var menu = document.getElementById('burger-menu-block');
var btnOpen = document.getElementById("burger-open-button-box");
var span = document.getElementsByClassName("burger-close-btn")[0];

btnOpen.onclick = function() {
   menu.style.display = "block";
 }
 span.onclick = function() {
   menu.style.display = "none";
 }
 window.onclick = function(event) {
   if (event.target == menu) {
     menu.style.display = "none";
   }
 }