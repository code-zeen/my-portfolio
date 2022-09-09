// masonry
function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
     resizeGridItem(allItems[x]);
  }
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
   imagesLoaded( allItems[x], resizeInstance);
}

function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

// accordion menu jQuery
$(".snb>li").mouseenter(function(){
  $(this).children(".sub-menu").stop().slideDown()
});
$(".snb>li").mouseleave(function(){
  $(this).children(".sub-menu").stop().slideUp()
});



// media Query
function myFunction(x) {
  if (x.matches) { // If media query matches
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

var x = window.matchMedia("(max-width: 985px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes