var database = firebase.database();
var ui = new firebaseui.auth.AuthUI(firebase.auth());

function getFormData() {
    var form = document.getElementById('registerform');
    var pwd = form.pwdinput.value;
    var email = form.emailinput.value;
    return pwd, email;
}

// function registerData(fname, lname, pwd, email) {
//     database.ref('venturers/' + fname).set({
//         firstname: fname,
//         lastname: lname,
//         password: pwd,
//         email: email
//     });
// }

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

function registerUser(email, pwd) {
    pwd,
    email = getFormData()
    firebase.auth().createUserWithEmailAndPassword(email, pwd).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'egyptboy2003.github.io/dashboard.html',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
}

ui.start('#firebaseui-auth-container', uiConfig);



document.getElementById('registerbtn').addEventListener('click', getFormData);
document.getElementById('loginbtn').addEventListener('click', getFormData);