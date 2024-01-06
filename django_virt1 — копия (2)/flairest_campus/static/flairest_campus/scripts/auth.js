function login() {
    const authToken = 'здесь_ваш_токен';
    const loginValue = document.getElementById("loginFormLogin").value;

    if (loginValue) {
        localStorage.setItem('authToken', authToken); 
        updateButtonVisibility(); 
        closeLoginForm();
    } else {
        alert("Введите логин!"); 
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateButtonVisibility();
});

updateButtonVisibility();

function updateButtonVisibility() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const profileBtn = document.getElementById('profileBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const isAuthenticated = isAuthenticatedOnServer();

    if (isAuthenticated) {
        if (loginBtn) {
            loginBtn.style.display = 'none';
        }
        if (registerBtn) {
            registerBtn.style.display = 'none';
        }
        if (profileBtn) {
            profileBtn.style.display = 'inline-block';
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
        }
    } else {
        if (loginBtn) {
            loginBtn.style.display = 'inline-block';
        }
        if (registerBtn) {
            registerBtn.style.display = 'inline-block';
        }
        if (profileBtn) {
            profileBtn.style.display = 'none';
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'none';
        }
    }
}

function logout() {
    localStorage.removeItem('authToken');
    updateButtonVisibility();
}


function isAuthenticatedOnServer() {
    const authToken = localStorage.getItem('authToken');
  
    return authToken !== null;
}
