
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
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
