document.addEventListener('DOMContentLoaded', function () {
    updateFilter();
});

function updateFilter() {
    var selectedFilter = document.getElementById('filterSelector').value;

    if (selectedFilter === 'universities') {
        showElements('univer1');
        hideElements(['napravlen1', 'Instityt1']);
    } else if (selectedFilter === 'directions') {
        showElements('napravlen1');
        hideElements(['univer1', 'Instityt1']);
    } else if (selectedFilter === 'institutes') {
        showElements('Instityt1');
        hideElements(['univer1', 'napravlen1']);
    }

    searchUniversities();
}

function toggleFilters() {
    var filterContainer = document.querySelector('.filter-container');
    filterContainer.style.display = filterContainer.style.display === 'none' ? 'flex' : 'none';
}


function showElements(className) {
    if (Array.isArray(className)) {
        for (var i = 0; i < className.length; i++) {
            showElements(className[i]);
        }
    } else {
        var elements = document.getElementsByClassName(className);

        for (var j = 0; j < elements.length; j++) {
            elements[j].style.display = 'block';
        }
    }
}

function hideElements(classNames) {
    if (Array.isArray(classNames)) {
        for (var k = 0; k < classNames.length; k++) {
            hideElements(classNames[k]);
        }
    } else {
        var elements = document.getElementsByClassName(classNames);

        for (var l = 0; l < elements.length; l++) {
            elements[l].style.display = 'none';
        }
    }
}

const universitySearch = document.getElementById('universitySearch');
const searchIcon = document.getElementById('searchIcon');

universitySearch.addEventListener('input', function () {
    if (universitySearch.value.trim() === '') {
        searchIcon.style.display = 'block';
    } else {
        searchIcon.style.display = 'none';
    }

    searchUniversities();
});

function searchUniversities() {
    var input, filter, universities, i, txtValue;
    input = document.getElementById('universitySearch');
    filter = input.value.toUpperCase();
    universities = document.getElementsByClassName('univ-link');

    var selectedFilter = document.getElementById('filterSelector').value;
    var selectedCity = document.getElementById('citySelector').value;

    for (i = 0; i < universities.length; i++) {
        var title = universities[i].getElementsByClassName('namesun')[0];
        txtValue = title.textContent || title.innerText;

        var filterMatch = selectedFilter === 'all' ||
            (selectedFilter === 'universities' && universities[i].classList.contains('univer1')) ||
            (selectedFilter === 'directions' && universities[i].classList.contains('napravlen1')) ||
            (selectedFilter === 'institutes' && universities[i].classList.contains('Instityt1'));

        var cityMatch = selectedCity === 'all' || universities[i].classList.contains(selectedCity.toLowerCase());

        if (txtValue.toUpperCase().indexOf(filter) > -1 && filterMatch && cityMatch) {
            universities[i].style.display = '';
        } else {
            universities[i].style.display = 'none';
        }
    }
}

function openLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var overlay = document.getElementById("overlay");
    loginForm.style.display = "block";
    overlay.style.display = "block";
}

function closeLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var overlay = document.getElementById("overlay");
    loginForm.style.display = "none";
    overlay.style.display = "none";
}

function login() {
    var loginForm = document.getElementById("loginForm");
    var loginValue = document.getElementById("loginFormLogin").value;

    if (loginValue) {
        alert("Вход выполнен для логина: " + loginValue);
        closeLoginForm();
    } else {
        alert("Введите логин!");
    }
}

function register() {
    alert("Регистрация");
}

function toggleAgree() {
    var agreeButton = document.querySelector('.agree-button');
    agreeButton.classList.toggle('checked');
}
