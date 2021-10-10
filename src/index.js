console.log("Hello from webpack");
import "./index.scss";//modify to use scss files


//For active tabs
let mainNavLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//For changue the navbar style on scroll
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");
  if ( currentScrollPos > 300  || navbar.offsetWidth <= 768) {
   navbar.style.backgroundColor = "black";
   navbar.style.backgroundColor = "0 2px 0 rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
}

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))