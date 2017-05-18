document.querySelectorAll('.themes li')
  .forEach(function(el) {
    el.addEventListener('click', function() {
      el.children[0].classList.add('show');
    });
  });

document.querySelectorAll('.themes .content .prev')
  .forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      document.getElementsByClassName('content show')[0].classList.remove('show');
    });
  });
