/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showHesabMenu() {
  var el = document.querySelector(".hesab-menu");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function trash(event){
  event.target.parentElement.parentElement.style.display="none"
}

