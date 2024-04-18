const input = document.getElementById('uploadedImage');
const placeholder = document.getElementById('placeholderImage');

input.addEventListener('change', function() {
  if (this.files.length === 0) {
    placeholder.style.display = 'block';
  } else {
    placeholder.style.display = 'none';
  }
});