
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN")
	var errorEmail = document.getElementById("errorEmail");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress = document.getElementById("errorAddress");
	var errorPhone = document.getElementById("errorPhone");       
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length < 3){
		error++;
		errorName.style.display = "block";
	}

	if(fLastN.value.length < 3){
		error++;
		errorLastN.style.display = "block";
	}

	var hayArroba = fEmail.value.includes('@');
	if(fEmail.value.length < 3 || hayArroba == false){
		error++;
		errorEmail.style.display = "block";
	}

	if(fPassword.value.length < 4){
		error++;
		errorPassword.style.display = "block";
	}

	if(fAddress.value.length < 3){
		error++;
		errorAddress.style.display = "block";
	}

	var esUnNumero = typeof parseInt(fPhone.value);
	console.log(esUnNumero);

	if(fPhone.value.length < 9 || fPhone.value.length > 9 || esUnNumero !== "number" ){
		error++;
		errorPhone.style.display = "block";
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
