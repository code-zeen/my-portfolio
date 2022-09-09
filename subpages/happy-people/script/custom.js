// menu
$('.gnb-menu li, .gnb-bar .bg').mouseenter(function(){
    $('.gnb-submenu, .gnb-bar .bg').stop().slideDown()
})
$('.gnb-menu li, .gnb-bar .bg').mouseleave(function(){
    $('.gnb-submenu, .gnb-bar .bg').stop().slideUp()
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
