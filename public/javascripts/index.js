
let windowHeightPixels = window.innerHeight;
let startingHeaderHeight = 3 * windowHeightPixels / 4;
console.log(windowHeightPixels);

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   let scrollHeight = document.documentElement.scrollTop;
   let headerHeight = startingHeaderHeight - scrollHeight;

   if (headerHeight > (windowHeightPixels / 10)) {
      // console.log(String(startingHeaderHeight - scrollHeight) + "px");
      document.getElementById("header").style.height = String(headerHeight) + "px";
   } else {
      document.getElementById("header").style.height = "10%";
   }
}