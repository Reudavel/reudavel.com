console.log("Hello from webpack");
import "./index.scss";//modify to use scss files


//For changue the navbar style on scroll
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");
  if ( currentScrollPos > 300) {
   navbar.style.backgroundColor = "black";
   navbar.style.backgroundColor = "0 2px 0 rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
}
