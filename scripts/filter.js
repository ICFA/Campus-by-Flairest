document.addEventListener('DOMContentLoaded', function () {
    updateFilter();
});

function updateFilter() {
    var selectedFilter = document.getElementById('filterSelector').value;

    if (selectedFilter === 'all') {
        showElements(['univer1', 'Instityt1', 'napravlen1']);
    } else if (selectedFilter === 'universities') {
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

    for (i = 0; i < universities.length; i++) {
        var title = universities[i].getElementsByClassName('namesun')[0];
        txtValue = title.textContent || title.innerText;

        var filterMatch = selectedFilter === 'all' ||
            (selectedFilter === 'universities' && universities[i].classList.contains('univer1')) ||
            (selectedFilter === 'directions' && universities[i].classList.contains('napravlen1')) ||
            (selectedFilter === 'institutes' && universities[i].classList.contains('Instityt1'));

        if (txtValue.toUpperCase().indexOf(filter) > -1 && filterMatch) {
            universities[i].style.display = '';
        } else {
            universities[i].style.display = 'none';
        }
    }
}

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchUniversities();
    }
}
