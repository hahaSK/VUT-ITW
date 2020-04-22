
window.onscroll = function() {setUnsetSticky(), this.changeLinkState()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var navbarLinks = document.querySelectorAll("#navbar a");

// Add the sticky class to the navbar when it reach its scroll position. Remove "sticky" when it leaves the scroll position
function setUnsetSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const links = navbarLinks;
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY - 500 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}