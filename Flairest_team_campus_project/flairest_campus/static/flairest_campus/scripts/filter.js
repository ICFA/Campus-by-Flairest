document.addEventListener('DOMContentLoaded', function () {
    updateFilter();
});

function updateFilter() {
    var filterChips = document.querySelector('.filter-chips');
    filterChips.innerHTML = '';
    
    var selectedFilter = document.getElementById('filterSelector').value;
    var selectedCity = document.getElementById('citySelector').value;
    var selectedEducationLevel = document.getElementById('educationLevelSelector').value;
    var selectedStudyForm = document.getElementById('studyFormSelector').value;
    var selectedMilitaryDepartment = document.getElementById('militaryDepartmentSelector').value;
    var selectedAccreditation = document.getElementById('accreditationSelector').value;
    var selectedEgeSubject = document.getElementById('egeSubjectSelector').value;
    var durationSubject = document.getElementById('durationSelector').value;

    var hideLastFilters = selectedFilter === 'universities' || selectedFilter === 'institutes';
    
    var educationLevelSelector = document.getElementById('educationLevelSelector').parentNode;
    var studyFormSelector = document.getElementById('studyFormSelector').parentNode;

    educationLevelSelector.style.display = hideLastFilters ? 'none' : 'flex';
    studyFormSelector.style.display = hideLastFilters ? 'none' : 'flex';

    if (selectedFilter !== 'all') {
        var selectedFilterText = document.getElementById('filterSelector').options[document.getElementById('filterSelector').selectedIndex].text;
        updateFilterChip('Filter', selectedFilterText);
    }
    if (selectedCity !== 'all') {
        updateFilterChip('City', selectedCity);
    }
    if (selectedEducationLevel !== 'all') {
        updateFilterChip('Education Level', selectedEducationLevel);
    }
    if (selectedStudyForm !== 'all') {
        updateFilterChip('Study Form', selectedStudyForm);
    }
    if (selectedMilitaryDepartment !== 'all') {
        updateFilterChip('Military Department', selectedMilitaryDepartment);
    }
    if (selectedAccreditation !== 'all') {
        updateFilterChip('Accreditation', selectedAccreditation);
    }
    if (selectedEgeSubject !== 'all') {
        updateFilterChip('EGE Subject', selectedEgeSubject);
    }
    if (durationSubject !== 'all') {
        updateFilterChip('durationSelector', durationSubject);
    }
    
    if (selectedFilter === 'universities') {
        showElements('univer1', 'hidden1');
        hideElements(['napravlen1', 'Instityt1']);
        document.getElementById('militaryDepartmentSelector').parentNode.style.display = 'flex';
        document.getElementById('accreditationSelector').parentNode.style.display = 'flex';
        document.getElementById('egeSubjectSelector').parentNode.style.display = 'none';
        document.getElementById('durationSelector').parentNode.style.display = 'none';
    } else if (selectedFilter === 'directions') {
        showElements('napravlen1');
        hideElements(['univer1', 'Instityt1', 'hidden1']);
        document.getElementById('militaryDepartmentSelector').parentNode.style.display = 'none';
        document.getElementById('accreditationSelector').parentNode.style.display = 'none';
        document.getElementById('egeSubjectSelector').parentNode.style.display = 'flex';
        document.getElementById('durationSelector').parentNode.style.display = 'flex';
    } else if (selectedFilter === 'institutes') {
        showElements(['Instityt1', 'hidden1']); 
        hideElements(['univer1', 'napravlen1', 'hidden1']);
        document.getElementById('militaryDepartmentSelector').parentNode.style.display = 'none';
        document.getElementById('accreditationSelector').parentNode.style.display = 'none';
        document.getElementById('egeSubjectSelector').parentNode.style.display = 'none';
        document.getElementById('durationSelector').parentNode.style.display = 'none';
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
    var selectedEgeSubject = document.getElementById('egeSubjectSelector').value;
    var selecteddurationSelector = document.getElementById('durationSelector').value;

    for (i = 0; i < universities.length; i++) {
        var title = universities[i].getElementsByClassName('namesun')[0];
        txtValue = title.textContent || title.innerText;

        var filterMatch = selectedFilter === 'all' ||
            (selectedFilter === 'universities' && universities[i].classList.contains('univer1')) ||
            (selectedFilter === 'directions' && universities[i].classList.contains('napravlen1')) ||
            (selectedFilter === 'institutes' && universities[i].classList.contains('Instityt1'));

        var cityMatch = selectedCity === 'all' || universities[i].classList.contains(selectedCity);
        var educationLevelMatch = selectedEducationLevel === 'all' || universities[i].classList.contains(selectedEducationLevel);
        var militaryDepartmentMatch = selectedMilitaryDepartment === 'all' || universities[i].classList.contains(selectedMilitaryDepartment);
        var accreditationMatch = selectedAccreditation === 'all' || universities[i].classList.contains(selectedAccreditation);
        var egeSubjectMatch = selectedEgeSubject === 'all' || universities[i].classList.contains(selectedEgeSubject);
        var durationMatch = selecteddurationSelector === 'all' || universities[i].classList.contains(selecteddurationSelector);

        var studyFormMatch = false;

        switch (selectedStudyForm) {
            case 'all':
                studyFormMatch = true;
                break;
            case 'очная':
                studyFormMatch = universities[i].classList.contains('очная') || universities[i].classList.contains('очная,');
                break;
            case 'очно-заочная':
                studyFormMatch = universities[i].classList.contains('очно-заочная') || universities[i].classList.contains('очно-заочная,');
                break;
            case 'заочная':
                studyFormMatch = universities[i].classList.contains('заочная') || universities[i].classList.contains('заочная,');
                break;
        }

        switch (selectedEgeSubject) {
            case 'all':
                egeSubjectMatch = true;
                break;
            case 'Русский язык':
                egeSubjectMatch = universities[i].classList.contains('Русский') || universities[i].classList.contains('Русский,');
                break;
            case 'Математика':
                egeSubjectMatch = universities[i].classList.contains('Математика') || universities[i].classList.contains('Математика,');
                break;
            case 'Физика':
                egeSubjectMatch = universities[i].classList.contains('Физика') || universities[i].classList.contains('Физика,');
                break;
            case 'Химия':
                egeSubjectMatch = universities[i].classList.contains('Химия') || universities[i].classList.contains('Химия,');
                break;
            case 'История':
                egeSubjectMatch = universities[i].classList.contains('История') || universities[i].classList.contains('История,');
                break;
            case 'Обществознание':
                egeSubjectMatch = universities[i].classList.contains('Обществознание') || universities[i].classList.contains('Обществознание,');
                break;
            case 'Информатика':
                egeSubjectMatch = universities[i].classList.contains('Информатика') || universities[i].classList.contains('Информатика,');
                break;
            case 'Биология':
                egeSubjectMatch = universities[i].classList.contains('Биология') || universities[i].classList.contains('Биология,');
                break;
            case 'География':
                egeSubjectMatch = universities[i].classList.contains('География') || universities[i].classList.contains('География,');
                break;
            case 'Иностранные языки':
                egeSubjectMatch = universities[i].classList.contains('Иностранные') || universities[i].classList.contains('Иностранные,');
                break;
            case 'Литература':
                egeSubjectMatch = universities[i].classList.contains('Литература') || universities[i].classList.contains('Литература,');
                break;
        }
        
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filterMatch && cityMatch && educationLevelMatch && studyFormMatch && militaryDepartmentMatch && accreditationMatch && egeSubjectMatch && durationMatch) {
            universities[i].style.display = '';
        } else {
            universities[i].style.display = 'none';
        }
    }
}

function updateFilterChip(filterType, filterValue) {
    var filterChips = document.querySelector('.filter-chips');
    var chip = document.createElement('div');
    chip.classList.add('filter-chip');
    chip.dataset.filterType = filterType;
    chip.innerHTML = filterValue + '<span class="filter-chip-close" onclick="removeFilterChip(this)">✖</span>';
    filterChips.appendChild(chip);
}

function isFirstChildChip(chipElement) {
    return !chipElement.parentNode.previousElementSibling;
}

function removeFilterChip(chipElement) {
    var chipType = chipElement.parentNode.dataset.filterType;

    if (chipType === 'Filter' || isFirstChildChip(chipElement)) {
        return;
    }

    var filterToReset;
    switch (chipType) {
        case 'City':
            filterToReset = 'citySelector';
            break;
        case 'Education Level':
            filterToReset = 'educationLevelSelector';
            break;
        case 'Study Form':
            filterToReset = 'studyFormSelector';
            break;
        case 'Military Department':
            filterToReset = 'militaryDepartmentSelector';
            break;
        case 'Accreditation':
            filterToReset = 'accreditationSelector';
            break;
        case 'EGE Subject':
            filterToReset = 'egeSubjectSelector';
            break;
        case 'durationSelector':
            filterToReset = 'durationSelector';
            break;
        default:
            break;
    }

    if (filterToReset) {
        document.getElementById(filterToReset).value = 'all';
    }

    chipElement.parentNode.remove();
    searchUniversities();
}

function resetFilter() {
    document.getElementById('citySelector').value = 'all';
    document.getElementById('educationLevelSelector').value = 'all';
    document.getElementById('studyFormSelector').value = 'all';
    document.getElementById('militaryDepartmentSelector').value = 'all';
    document.getElementById('accreditationSelector').value = 'all';
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
