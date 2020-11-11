detailsButton = document.getElementById('details');
loginButton = document.getElementById('login');
logoutButton = document.getElementById('logout');

function authRedirect() {
    if (sessionStorage.getItem('logintoken') == null) {
        window.location.href = "index.html";
    };
}

function authHeaders() {
    if (sessionStorage.getItem('logintoken') == null) {
        loginButton.style.display = 'inline'
        logoutButton.style.display = 'none'
        detailsButton.style.display = 'none'
    } else {
        console.log(loginButton)
        loginButton.style.display = 'none'
        logoutButton.style.display = 'inline'
        detailsButton.style.display = 'inline'
    }
}

function authBoth() {
    authRedirect();
    authHeaders();
}