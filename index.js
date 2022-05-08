// getting all html elements needed and binding it to a value
let dataNum = document.querySelectorAll(".digitBtn");
let dataOperator = document.querySelector(".operationBtn");
let delOperator = document.querySelector(".deleteBtn");
let clearAll = document.querySelector("#clear");
let equalTo = document.querySelector("#equalTo");
let currentOperand = document.querySelector(".current-operation").innerText;


// click event for each digit button and to display value in current operand
dataNum.forEach(item => {
	item.addEventListener("click", () => {
		// console.log("ive been clicked");
		let digit = dataNum.value;
		console.log(digit)
	});
});

function digitValue(){
	 
};























// function getUpperVal(){
// 	return document.querySelector("#upper-value").innerText;
// }

// function printUpperVal(value){
// 	document.querySelector("#upper-value").innerText=value;
// }

// function getCurrentVal(){
// 	return document.querySelector("#current-value").innerText;
// }

// function printCurrentVal(digitVal){
// 	if (digitVal === '') return document.querySelector("#current-value").innerText = digitVal
// 	else return document.querySelector("#current-value").innerText = digitVal;
// }




























// dark theme toggle function
const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});