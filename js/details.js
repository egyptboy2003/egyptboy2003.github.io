var database = firebase.database();
var form = document.getElementById('detailsform');
var userKey = sessionStorage.getItem('logintoken');

// Send form data to database
function inputData() {
    database.ref('venturers/' + userKey + '/').set({
        email: form.email.value,
        details: {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            phone: form.phone.value,
            address: form.address.value,
            allergies: form.allergies.value
        },
        parentdetails: {
            firstname: form.parentfirstname.value,
            lastname: form.parentlastname.value,
            email: form.parentemail.value,
            phone: form.parentphone.value
        }
    });
}

// Set the starting value for input fields to be the database values.
function fetchData() {
    database.ref('venturers').orderByKey().equalTo(userKey).on('value', (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            userRef = childSnapshot.val();
            form.email.value = userRef.email;
            form.firstname.value = userRef.details.firstname;
            form.lastname.value = userRef.details.lastname;
            form.phone.value = userRef.details.phone;
            form.address.value = userRef.details.address;
            form.allergies.value = userRef.details.allergies;
            form.parentfirstname.value = userRef.parentdetails.firstname;
            form.parentlastname.value = userRef.parentdetails.lastname;
            form.parentemail.value = userRef.parentdetails.email;
            form.parentphone.value = userRef.parentdetails.phone;
        })
    });
}

// Add event listeners for functions
document.addEventListener('DOMContentLoaded', fetchData);
document.getElementById('detailssubmit').addEventListener('click', inputData);