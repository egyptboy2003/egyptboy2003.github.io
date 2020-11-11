var logintoken = sessionStorage.getItem('logintoken');

function authRedirect() {
    page = window.location.pathname.substring(window.location.pathname.lastIndexOf('/'))
    if (page == '/dashboard.html' || page == '/details.html') {
        if (logintoken == null) {
            window.location.href = "index.html";
        }
    }
}

function authHeaders() {
    detailsButton = document.getElementById('details');
    loginButton = document.getElementById('login');
    logoutButton = document.getElementById('logout');

    if (logintoken == null) {
        loginButton.style.display = 'inline'
        logoutButton.style.display = 'none'
        detailsButton.style.display = 'none'
    } else {
        loginButton.style.display = 'none'
        logoutButton.style.display = 'inline'
        detailsButton.style.display = 'inline'
    }
}

function authLogout() {
    sessionStorage.removeItem('logintoken');
}


window.addEventListener('DOMContentLoaded', authHeaders)
window.addEventListener('DOMContentLoaded', authRedirect)