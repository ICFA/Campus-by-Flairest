document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    const featuresSection = document.getElementById('features');
    const contactsSection = document.getElementById('contacts');

    restoreContent(aboutSection, 'aboutContent', 'aboutEditing');
    restoreContent(featuresSection, 'featuresContent', 'featuresEditing');
    restoreContent(contactsSection, 'contactsContent', 'contactsEditing');

    aboutSection.addEventListener('input', function () {
        saveContent(aboutSection, 'aboutContent', 'aboutEditing');
    });

    featuresSection.addEventListener('input', function () {
        saveContent(featuresSection, 'featuresContent', 'featuresEditing');
    });

    contactsSection.addEventListener('input', function () {
        saveContent(contactsSection, 'contactsContent', 'contactsEditing');
    });

    function saveContent(section, contentKey, editingKey) {
        const content = section.innerHTML;
        localStorage.setItem(contentKey, content);
        localStorage.setItem(editingKey, 'true');
    }

    function restoreContent(section, contentKey, editingKey) {
        const content = localStorage.getItem(contentKey);
        const isEditing = localStorage.getItem(editingKey);

        if (content && isEditing === 'true') {
            section.innerHTML = content;
            section.setAttribute('contenteditable', 'true');
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    restoreImage();
});

function deleteImage() {
    const uniImage = document.getElementById('uniImage');
    uniImage.src = ''; 
}

function replaceImage(input) {
    const uniImage = document.getElementById('uniImage');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uniImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function restoreImage() {
    const uniImage = document.getElementById('uniImage');
    const savedImage = localStorage.getItem('uniImage');

    if (savedImage) {
        uniImage.src = savedImage;
    }
}

document.getElementById('uniImage').addEventListener('change', function () {
    const uniImage = document.getElementById('uniImage');
    localStorage.setItem('uniImage', uniImage.src);
});

document.addEventListener('DOMContentLoaded', function () {
    restoreContent();
});

function deleteImage() {
    const uniImage = document.getElementById('uniImage');
    const deleteButton = document.querySelector('.delete-button');
    const fileInputContainer = document.querySelector('.file-input-container');

    uniImage.src = '';
    deleteButton.style.display = 'none';
    fileInputContainer.style.display = 'block';

    saveContent();
}

function replaceImage(input) {
    const uniImage = document.getElementById('uniImage');
    const deleteButton = document.querySelector('.delete-button');
    const fileInputContainer = document.querySelector('.file-input-container');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uniImage.src = e.target.result;
            deleteButton.style.display = 'block';
            fileInputContainer.style.display = 'none';
            saveImageToLocalStorage();
        };

        reader.readAsDataURL(file);
    }
}

function restoreContent() {
    const uniTitle = document.getElementById('uniTitle');
    const savedTitle = localStorage.getItem('uniTitle');

    if (savedTitle) {
        uniTitle.innerHTML = savedTitle;
    }
}

function saveContent() {
    const uniTitle = document.getElementById('uniTitle');
    localStorage.setItem('uniTitle', uniTitle.innerHTML);
}

function saveImageToLocalStorage() {
    const uniImage = document.getElementById('uniImage');
    localStorage.setItem('uniImage', uniImage.src);
}


document.getElementById('uniImage').addEventListener('change', function () {
    const uniImage = document.getElementById('uniImage');
    const deleteButton = document.querySelector('.delete-button');
    const fileInputContainer = document.querySelector('.file-input-container');

    localStorage.setItem('uniImage', uniImage.src);
    deleteButton.style.display = 'block';
    fileInputContainer.style.display = 'none';
    
});

function addSection() {
    const newSection = document.createElement('section');
    newSection.setAttribute('data-id', Date.now());

    const newTitle = document.createElement('h2');
    newTitle.contentEditable = true;
    newTitle.spellcheck = false;
    newSection.appendChild(newTitle);

    const newParagraph = document.createElement('p');
    newParagraph.contentEditable = true;
    newParagraph.spellcheck = false;
    newParagraph.innerHTML = 'введите текст'; 
    newSection.appendChild(newParagraph);

    const univInformation = document.querySelector('.univ-information');
    univInformation.insertBefore(newSection, univInformation.lastElementChild);

    newTitle.focus();
}

