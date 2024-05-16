$(document).ready(function () {
  const photoForm = document.querySelector('.photo-form');
  const img = document.createElement('img');
  img.alt = "prev img";
  const input = photoForm.querySelector('input')
  input.id = 'input__file';
  var photoUrl;
  try {
    photoUrl = photoForm.querySelector('a').getAttribute('href');
    img.src = photoUrl;
  } catch {
    
  }

  photoForm.prepend(img);
  input.addEventListener('change', function () {
    let file = input.files[0];
    if (file) {
      img.src = URL.createObjectURL(file);
    }
  });
});