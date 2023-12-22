function login() {
    const authToken = 'здесь_ваш_токен';
    if (authToken) {
        localStorage.setItem('authToken', authToken); 
        updateButtonVisibility(); 
        closeLoginForm(); а
    } else {
        alert("Неверные учетные данные"); 
    }
}

function updateButtonVisibility() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const profileBtn = document.getElementById('profileBtn');

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
    }
}

function isAuthenticatedOnServer() {
    const authToken = localStorage.getItem('authToken');
  
    if (authToken) {
      return true; 
    }
  
    return false; 
}
