
// Exercise 6
function validate() {
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastName = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	const namePattern = /^[a-zA-ZñÑçÇáàÁÀéèÉÈíÍóòÓÒúÚ]{3,10}\s?$/;
	const mailPattern = /^\w{3,}@{1}\w{2,}\.{1}\w{2,}/;
	const addPattern = /\w{3,}\s*-*/;
	const passPattern = /[a-zA-ZñÑçÇáàÁÀéèÉÈíÍóòÓÒúÚ]{3,7}\d+/;
	const phonePattern = /\d{9}/;

	// Get the error elements
	var errorfName = document.getElementById("errorfName");
	var errorEmail = document.getElementById("errorEmail");  
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	if(!namePattern.test(fName.value)){
		errorfName.classList = "visible-error";
		fName.classList.remove("on-change");
		fName.classList.add("invalid-input");
	}
	if(!mailPattern.test(fEmail.value)){
		errorEmail.classList = "visible-error";
		fEmail.classList.remove("on-change");
		fEmail.classList.add("invalid-input");
	}
	if(!addPattern.test(fAddress.value)){
		errorAddress.classList = "visible-error";
		fAddress.classList.remove("on-change");
		fAddress.classList.add("invalid-input");
	}
	if (!namePattern.test(fLastName.value)){
		errorLastN.classList = "visible-error";
		fLastName.classList.remove("on-change");
		fLastName.classList.add("invalid-input");
	}
	if (!passPattern.test(fPassword.value)){
		errorPassword.classList = "visible-error";
		fPassword.classList.remove("on-change");
		fPassword.classList.add("invalid-input");
	}
	if (!phonePattern.test(fPhone.value)){
		errorPhone.classList = "visible-error";
		fPhone.classList.remove("on-change");
		fPhone.classList.add("invalid-input");
	}

}

const form = document.getElementById("form");
form.addEventListener("submit", e =>{
	e.preventDefault();
	validate();
});
