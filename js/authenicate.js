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
    loginoutText = document.getElementById('loginout-text');

    if (logintoken == null) { // If not logged in
        loginoutText.innerHTML = 'Register/Login';
        detailsButton.style.display = 'none'
    } else { // Not logged in
        loginoutText.innerHTML = 'Logout';
        detailsButton.style.display = 'inline'
    }
}

function authLogout() {
    sessionStorage.removeItem('logintoken');
}

function authSwitch() {
    if (logintoken != null) { // If logged in
        authLogout()
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html";
    }
}
window.addEventListener('DOMContentLoaded', authHeaders)
window.addEventListener('DOMContentLoaded', authRedirect)