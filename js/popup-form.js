var modalWindow = document.getElementById('modal-1');

var btn6 = document.getElementById("catalog-btn-open-6");
var span = document.getElementsByClassName("popup-close-btn")[0];


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


