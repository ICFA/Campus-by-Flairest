$(document).ready(function () {
  const input = document.querySelector('#uniImage');
  const placeholder = document.getElementById('placeholderImage');
  const photoForm = document.querySelector('.photo-form');
  const prevPhotoUrl = photoForm.querySelector('a').getAttribute('href');
  placeholder.setAttribute('src', prevPhotoUrl);

  input.addEventListener('change', function () {
    placeholder.style.display = 'none';
  });
});