var database = firebase.database();
function getUserData() {
  var form = document.getElementById("registerform");
  var fname = form.fnameinput.value;
  var lname = form.lnameinput.value;
  var pwd = form.pwdinput.value;
  var email = form.emailinput.value;
  alert(fname + lname + pwd + email);
  writeUserData(fname, lname, pwd, email);
}

function writeUserData(fname, lname, pwd, email) {
  database.ref("venturers/" + fname).set({
    firstname: fname,
    password: pwd
  });
}

document.getElementById("submitbtn").addEventListener("click", getUserData);
