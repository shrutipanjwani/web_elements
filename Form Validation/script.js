const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove white spaces
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const phoneValue = phone.value.trim();

	if (nameValue === "") {
		setErrorFor(name, "Name can't be blank");
	} else {
		setSuccessFor(name);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email can't be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

	if (addressValue === "") {
		setErrorFor(address, "Address can't be blank");
	} else {
		setSuccessFor(address);
	}

	if (phoneValue === "") {
		setErrorFor(phone, "Phone no. can't be blank");
	} else {
		setSuccessFor(phone);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "input error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "input success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
