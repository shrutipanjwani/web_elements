function validate() {
  var text;
  if (document.myForm.name.value == "") {
    text = "Name cannot be empty";
    document.getElementById("error").innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    text = "E-mail cannot be empty";
    document.getElementById("error").innerHTML = text;
    document.myForm.email.focus();
    return false;
  }
  var emailID = document.myForm.email.value;
  atposn = emailID.indexOf("@");
  dotposn = emailID.lastIndexOf(".");
  if (atposn < 1 || dotposn - atposn < 2) {
    text = "Please enter valid email ID";
    document.getElementById("error").innerHTML = text;
    document.myForm.email.focus();
    return false;
  }
  if (
    document.myForm.phone.value == "" ||
    isNaN(document.myForm.phone.value) ||
    document.myForm.phone.value.length != 10
  ) {
    text = "Please enter a valid 10-digit phone number";
    document.getElementById("error").innerHTML = text;
    document.myForm.phone.focus();
    return false;
  }
  if (document.myForm.subject.value == "0") {
    text = "Please provide your area of expertise";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  return true;
}

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const address = document.getElementById("address");
// const phone = document.getElementById("phone");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove white spaces
// 	const nameValue = name.value.trim();
// 	const emailValue = email.value.trim();
// 	const addressValue = address.value.trim();
// 	const phoneValue = phone.value.trim();

// 	if (nameValue === "") {
// 		setErrorFor(name, "Name can't be blank");
// 	} else {
// 		setSuccessFor(name);
// 	}

// 	if (emailValue === "") {
// 		setErrorFor(email, "Email can't be blank");
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, "Not a valid email");
// 	} else {
// 		setSuccessFor(email);
// 	}

// 	if (addressValue === "") {
// 		setErrorFor(address, "Address can't be blank");
// 	} else {
// 		setSuccessFor(address);
// 	}

// 	if (phoneValue === "") {
// 		setErrorFor(phone, "Phone no. can't be blank");
// 	} else {
// 		setSuccessFor(phone);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector("small");
// 	formControl.className = "input error";
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = "input success";
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
// 		email
// 	);
// }
