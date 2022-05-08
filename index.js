let dataNum = document.querySelector(".digitBtn");
let dataOperator = document.querySelector(".operationBtn");
let delOperator = document.querySelector(".deleteBtn");
let clearAll = document.querySelector("#clear");
let equalTo = document.querySelector("#equalTo");


function getUpperVal(){
	return document.querySelector("#upper-value").innerText;
}

function printUpperVal(value){
	document.querySelector("#upper-value").innerText=value;
}

function getCurrentVal(){
	return document.querySelector("#current-value").innerText;
}

function printCurrentVal(digitVal){
	if (digitVal === '') return document.querySelector("#current-value").innerText = digitVal
	else return document.querySelector("#current-value").innerText = digitVal;
}





























const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});