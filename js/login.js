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
        id = database.ref('venturers').push({
            password: pwd,
            email: email,
            details: {
                firstname: fname,
                lastname: lname
            }
        }).key;
        sessionStorage.setItem('logintoken', id);
    }
}

// Validate Register Info
function validateInfo() {
    var form = document.getElementById('registerform');
    var sameEmail = false
    fname = form.fnameinput.value;
    lname = form.lnameinput.value;
    pwd = form.pwdinput.value;
    email = form.emailinput.value;
    database.ref('venturers').orderByChild("email").equalTo(email).on('value', (snapshot) => {
        snapshot.forEach(function() {
            sameEmail = true
        });
    });

    if (sameEmail) {
        error = 'Email is already in use.'
    } else if (pwd.length < 8) {
        error = 'Password is less than 8 characters'
    } else if (pwd.toLowerCase() == pwd) {
        error = 'Password has to have a capital letter and a number.'
    } else if (!(/\d/.test(pwd))) {
        error = 'Password has to have a capital letter and a number.'
    } else {
        error = ''
    };

    if (error) {
        document.getElementById('registererrorbox').style.display = 'inline';
        document.getElementById('registererrorbox').innerHTML = error;
        return false;
    } else {
        document.getElementById('registererrorbox').style.display = 'none';
        return true;
    }

}

// Test if email exists, if so does password match. If it does, store UserID
function validateLogin() {
    var error = true;
    var form = document.getElementById('loginform');
    pwd = form.pwdinput.value;
    email = form.emailinput.value;

    database.ref('venturers').orderByChild("email").equalTo(email).on('value', (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            if (childData.password == pwd) {
                error = false;
            }
        });
    });

    if (error == true) {
        document.getElementById('loginerrorbox').style.display = 'inline';
        return false
    } else if (error == false) {
        document.getElementById('loginerrorbox').style.display = 'none';
        return true
    }

}
// Changes sign in boxes
function toLogin() {
    document.getElementById('registerform').style.display = 'none';
    document.getElementById('loginform').style.display = 'inline';
    document.getElementById('registerbtn').style.backgroundColor = '#333';
    document.getElementById('loginbtn').style.backgroundColor = '#111';
}

function toRegister() {
    document.getElementById('loginform').style.display = 'none';
    document.getElementById('registerform').style.display = 'inline';
    document.getElementById('registerbtn').style.backgroundColor = '#111';
    document.getElementById('loginbtn').style.backgroundColor = '#333';
}

// Add event listeners for the login buttons & submit buttons
document.getElementById('registerbtn').addEventListener('click', toRegister);
document.getElementById('loginbtn').addEventListener('click', toLogin);