document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const profileBtn = document.getElementById('profileBtn');

    checkAuthentication();

    function checkAuthentication() {
        setTimeout(() => {
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
        }, 1000); 
    }

        const jwt = require('jsonwebtoken');

        function generateToken(userId) {
        const secretKey = 'your-secret-key';
        const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); 
        return token;
        }

        function verifyToken(token) {
        const secretKey = 'your-secret-key'; 
        try {
            const decoded = jwt.verify(token, secretKey);
            return decoded.userId; 
        } catch (error) {
            return null; 
        }
        }

        const userId = 123; 
        const authToken = generateToken(userId);
        console.log('Токен:', authToken);

        const verifiedUserId = verifyToken(authToken);
        console.log('Раскодированный userId:', verifiedUserId);

    function isAuthenticatedOnServer() {
        const authToken = localStorage.getItem('authToken');
      
        if (authToken) {
          const userId = verifyToken(authToken);
      
          if (userId !== null) {
            return true; 
          }
        }
      
        return false; 
      }
      
});
