var database = firebase.database();

// Register user data
function registerUser() {
    if (!validateInfo()) {
        return false
    } else {
        var form = document.getElementById('registerform');
        fname = form.fnameinput.value;
        lname = form.lnameinput.value;
        pwd = form.pwdinput.value;
        email = form.emailinput.value;
        database.ref('venturers').push().set({
            firstname: fname,
            lastname: lname,
            password: pwd,
            email: email
        });
    }
}
// Login
function validateInfo() {
    var form = document.getElementById('registerform');
    fname = form.fnameinput.value;
    lname = form.lnameinput.value;
    pwd = form.pwdinput.value;
    email = form.emailinput.value;
    if (pwd.length < 8) {
        error = 'Password is less than 8 characters'
    } else {
        error = ''
    };

    if (error) {
        document.getElementById('errorbox').style.display = 'inline';
        document.getElementById('errorbox').innerHTML = error;
        return false;
    } else {
        return true;
    }

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