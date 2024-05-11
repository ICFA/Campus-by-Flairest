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