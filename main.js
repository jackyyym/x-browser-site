document.addEventListener("scroll", function () {
  let elements = document.querySelectorAll('.hidden')
  for (var i = 0; i < elements.length; i++) {
    if (isScrolledIntoView(elements[i])) {
      elements[i].classList.remove('hidden')
    }
  }
});


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
