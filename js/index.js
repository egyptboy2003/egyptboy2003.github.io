function getUserData(form) {
	var uname = form.unameinput.value;
	var fname = form.fnameinput.value;
	var lname = form.lnameinput.value;
	var pwd = form.pwdinput.value;
	var email = form.emailinput.value;
	alert(uname + fname + lname + pwd + email);
	writeUserData(uname, fname, lname, pwd, email);
}

function writeUserData(uname, fname, lname, pwd, email) {
	alert("received: " + uname);

	firebase
		.database()
		.ref("venturers/" + uname)
		.set(
			{
				firstname: fname
			},
			function(error) {
				if (error) {
					alert("the error is: ");
					alert(error);
				} else {
					alert("done");
				}
			}
		);
}
function test() {
	alert("test complete");
}

//var registerForm = document.getElementById("registerform");
//document.getElementById("submitbtn").addEventListener("click", );
