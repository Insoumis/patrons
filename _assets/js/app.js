document.querySelector('.menu-icon').addEventListener('click', function() {
  var header = document.querySelector('header');
  if (header.style.transform === "translateX(0%)") {
    header.style.transform = "translateX(-101%)";
  } else {
    header.style.transform = "translateX(0%)";
  }
}, false);
