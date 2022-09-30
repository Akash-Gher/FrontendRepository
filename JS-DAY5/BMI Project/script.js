// window.onload = () => {
// 	let button = document.querySelector("#btn");

// 	// Function for calculating BMI
// 	button.addEventListener("click", calculateBMI);
// };

function calculateBMI() {


	let height = parseInt(document.querySelector("#height").value);  //for height in CM
	let weight = parseInt(document.querySelector("#weight").value);   //for weight in kg
	let result = document.querySelector("#result");


	if (height === "" || isNaN(height))
		result.innerHTML = "Enter a valid Height in CM!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Enter a valid Weight in KG";

	else {

	let bmi = (weight / ((height * height)/ 10000)).toFixed(2); //to calculate BMI

		if (bmi < 18.5) result.innerHTML =`You are Under Weight : <span>${bmi} BMI</span>`;  //BMI Indicators with Result

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`You are Normal : <span>${bmi} </span>`;

		else result.innerHTML =
			`you are Over Weight : <span>${bmi} BMI </span>`;
	}
}
