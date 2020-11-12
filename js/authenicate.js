var loginToken = sessionStorage.getItem('logintoken');

// Checks on page load to see if the user is in a restricted zone without a login token
function authRedirect() {
    page = window.location.pathname.substring(window.location.pathname.lastIndexOf('/'))
    if (page == '/dashboard.html' || page == '/details.html') {
        if (loginToken == null) {
            window.location.href = "index.html";
        }
    }
}

// Changes navbar buttons depending on if user is logged in or not
function authHeaders() {
    detailsButton = document.getElementById('details');
    loginoutText = document.getElementById('loginouttext');

    if (loginToken == null) { // If not logged in
        loginoutText.innerHTML = 'Register/Login';
        detailsButton.style.display = 'none'
    } else { // logged in
        loginoutText.innerHTML = 'Logout';
        detailsButton.style.display = 'inline'
    }
}

// remove token from user
function authLogout() {
    sessionStorage.removeItem('logintoken');
}

// login / logout depending on token.
function authSwitch() {
    if (loginToken != null) { // If logged in
        authLogout()
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html";
    }
}

// Run each function on page load
window.addEventListener('DOMContentLoaded', authHeaders)
window.addEventListener('DOMContentLoaded', authRedirect)