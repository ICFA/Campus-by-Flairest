function toggleNavList () {
    var navContainer = document.querySelector('.nav-list-reduced');
    var main = document.querySelector('main');
    var bottomDecor = document.querySelector('.main-bottom-decoration');
    navContainer.style.display = navContainer.style.display === 'none' ? 'flex' : 'none';
    main.style.display = main.style.display === 'none' ? 'block' : 'none';
    bottomDecor.style.display = bottomDecor.style.display === 'none' ? 'block' : 'none';
}