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


function sendEmail(element) {
  var formData = new FormData(element);

  name = encodeURI(formData.get('Name'))
  message = encodeURI("Email from: " + formData.get('Email') + "\nMessage: " + formData.get('Message'))

  mailTo = `mailto:jacklyn_mcgrath@student.uml.edu?subject=${name}&body=${message}`

  window.location = mailTo;

  return false;
}
