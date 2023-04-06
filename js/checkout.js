
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	console.log(fName.value);
	var fEmail = document.getElementById("fEmail");
	console.log(fEmail.value);

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length < 3){
		error++;
		console.log("Error");
	}

	if(fLastN.value.length < 3){
		error++;
		console.log("Error");
	}

	var hayArroba = fEmail.value.includes('@');
	console.log (hayArroba);

	if(fEmail.value.length < 3 || hayArroba == false){
		error++;
		console.log("Error");
	}

	if(fPassword.value.length < 4 || hayArroba == false){
		error++;
		console.log("Error");
	}

	if(fAddress.value.length < 3 || hayArroba == false){
		error++;
		console.log("Error");
	}

	if(fAddress.value.length < 3 || hayArroba == false){
		error++;
		console.log("Error");
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
