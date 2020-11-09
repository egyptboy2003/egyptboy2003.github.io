var database = firebase.database();

// Register user data
function registerUser() {
    var form = document.getElementById('registerform');
    database.ref('venturers').push().set({
        firstname: form.fnameinput.value,
        lastname: form.lnameinput.value,
        password: form.pwdinput.value,
        email: form.emailinput.value
    });
}
// Login
function isValidUser() {
    var form = document.getElementById('registerform');
    var email = form.emailinput.value;
    var pwd = form.pwdinput.value;
    database.ref('venturers').once('value', function(snapshot) {
        goal = snapshot.val();
        sleepGoalInput.value = goal;
    });

}

// Changes sign in boxes
function toLogin() {
    document.getElementById('registerform').style.display = 'none';
    document.getElementById('loginform').style.display = 'inline';
    document.getElementById('registerbtn').style.backgroundColor = '#333';
    document.getElementById('loginbtn').style.backgroundColor = '#222';
}

function toRegister() {
    document.getElementById('loginform').style.display = 'none';
    document.getElementById('registerform').style.display = 'inline';
    document.getElementById('registerbtn').style.backgroundColor = '#222';
    document.getElementById('loginbtn').style.backgroundColor = '#333';
}

// Add event listeners for the login buttons & submit buttons
document.getElementById('registerbtn').addEventListener('click', toRegister);
document.getElementById('loginbtn').addEventListener('click', toLogin);
document.getElementById('registersubmit').addEventListener('click', registerUser);
document.getElementById('loginsubmit').addEventListener('click', toLogin);