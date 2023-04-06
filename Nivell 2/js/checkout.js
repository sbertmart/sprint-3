
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
		document.getElementsByClassName("form-control")[0].style.border = "2px solid red";
	}

	if(fLastN.value.length < 3){
		error++;
		errorLastN.style.display = "block";
		document.getElementsByClassName("form-control")[3].style.border = "2px solid red";
	}

	var hayArroba = fEmail.value.includes('@');
	if(fEmail.value.length < 3 || hayArroba == false){
		error++;
		errorEmail.style.display = "block";
		document.getElementsByClassName("form-control")[1].style.border = "2px solid red";
	}

	if(fPassword.value.length < 4){
		error++;
		errorPassword.style.display = "block";
		document.getElementsByClassName("form-control")[4].style.border = "2px solid red";
	}

	if(fAddress.value.length < 3){
		error++;
		errorAddress.style.display = "block";
		document.getElementsByClassName("form-control")[2].style.border = "2px solid red";
	}

	var esUnNumero = typeof parseInt(fPhone.value);
	console.log(esUnNumero);

	if(fPhone.value.length < 9 || fPhone.value.length > 9 || esUnNumero !== "number" ){
		error++;
		errorPhone.style.display = "block";
		document.getElementsByClassName("form-control")[5].style.border = "2px solid red";
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
