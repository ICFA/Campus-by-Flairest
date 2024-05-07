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

function searchUniversities() {
    var input, filter, universities, i, txtValue;
    input = document.getElementById('universitySearch');
    filter = input.value.toUpperCase();
    universities = document.getElementsByClassName('univ-link');

    var selectedFilter = document.getElementById('filterSelector').value;
    var selectedCity = document.getElementById('citySelector').value;
    var selectedEducationLevel = document.getElementById('educationLevelSelector').value;
    var selectedStudyForm = document.getElementById('studyFormSelector').value;
    var selectedMilitaryDepartment = document.getElementById('militaryDepartmentSelector').value;
    var selectedAccreditation = document.getElementById('accreditationSelector').value;

    console.log("Selected City: ", selectedCity);
    console.log("Selected Education Level: ", selectedEducationLevel);
    console.log("Selected Study Form: ", selectedStudyForm);
    console.log("Selected Military Department: ", selectedMilitaryDepartment);
    console.log("Selected Accreditation: ", selectedAccreditation);

    for (i = 0; i < universities.length; i++) {
        var title = universities[i].getElementsByClassName('namesun')[0];
        txtValue = title.textContent || title.innerText;

        var filterMatch = selectedFilter === 'all' ||
            (selectedFilter === 'universities' && universities[i].classList.contains('univer1')) ||
            (selectedFilter === 'directions' && universities[i].classList.contains('napravlen1')) ||
            (selectedFilter === 'institutes' && universities[i].classList.contains('Instityt1'));

        var cityMatch = selectedCity === 'all' || universities[i].classList.contains(selectedCity);
        var educationLevelMatch = selectedEducationLevel === 'all' || universities[i].classList.contains(selectedEducationLevel);
        var studyFormMatch = selectedStudyForm === 'all' || universities[i].classList.contains(selectedStudyForm);
        var militaryDepartmentMatch = selectedMilitaryDepartment === 'all' || universities[i].classList.contains(selectedMilitaryDepartment);
        var accreditationMatch = selectedAccreditation === 'all' || universities[i].classList.contains(selectedAccreditation);

        if (txtValue.toUpperCase().indexOf(filter) > -1 && filterMatch && cityMatch && educationLevelMatch && studyFormMatch && militaryDepartmentMatch && accreditationMatch) {
            universities[i].style.display = '';
        } else {
            universities[i].style.display = 'none';
        }
    }
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

function toggleFilters() {
    var filterContainer = document.querySelector('.filter-container');
    filterContainer.style.display = filterContainer.style.display === 'none' ? 'flex' : 'none';
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

function openLoginForm(type) {
    var loginForm = document.getElementById("loginForm");
    var overlay = document.getElementById("overlay");
    var loginAcc = document.querySelector('.input-acc');
    var regAcc = document.querySelector('.reg-acc');
    var loginButton = document.getElementById("loginButton");
    var registerButton = document.getElementById("registerButton");

    loginForm.style.display = "block";
    overlay.style.display = "block";

    if (type === 'login') {
        loginAcc.style.display = 'block';
        regAcc.style.display = 'none';
        loginButton.classList.add('active');
        registerButton.classList.remove('active');
    } else if (type === 'register') {
        loginAcc.style.display = 'none';
        regAcc.style.display = 'block';
        registerButton.classList.add('active');
        loginButton.classList.remove('active');
    }
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

function toggleButton(event) {
    var buttons = document.querySelectorAll('.input-word');
    var loginAcc = document.querySelector('.input-acc');
    var regAcc = document.querySelector('.reg-acc');

    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    event.target.classList.add('active');

    var container = document.querySelector('.button-container');
    container.style.background = event.target.id === 'registerButton' ?
        'linear-gradient(to right, #8269EF 50%, #e0d9fb 50%)' :
        'linear-gradient(to right, #e0d9fb 50%, #8269EF 50%)';

    var loginButtonContainer = document.querySelector('.login-button-container');
    var registerButtonContainer = document.querySelector('.register-button-container');

    if (event.target.id === 'registerButton') {
        loginAcc.style.display = 'none';
        regAcc.style.display = 'block';
        loginButtonContainer.style.display = 'none';
        registerButtonContainer.style.display = 'block';
    } else {
        loginAcc.style.display = 'block';
        regAcc.style.display = 'none';
        loginButtonContainer.style.display = 'block';
        registerButtonContainer.style.display = 'none';
    }
}


