var productButtons = document.querySelectorAll('.productButton');
var asideContainer = document.getElementById('asideContainer');
var closingIcon = document.getElementById('closingIcon');

productButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    asideContainer.style.display = 'block';
  });
});

closingIcon.addEventListener('click', function () {
  asideContainer.style.display = 'none';
});