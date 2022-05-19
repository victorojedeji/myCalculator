// getting all html elements needed and binding it to a value
let dataNum = document.querySelectorAll(".digitBtn");
let dataOperator = document.querySelectorAll(".operationBtn");
let delOperator = document.querySelector(".deleteBtn");
let clearAll = document.querySelector("#clear");
let equalTo = document.querySelector("#equalTo");
let currentOperand = document.querySelector("#current-value").innerText;
let upperOperand = document.querySelector("#upper-value").innerText;
let operator = document.querySelector("#operator").innerText;




dataNum.forEach(item => {
	item.addEventListener("click", function() {
		let digit = this.innerText;
		document.querySelector("#upper-value").innerText += digit;
	});
});


dataOperator.forEach(item => {
	item.addEventListener("click", function() {
		let oper = this.innerText;
		document.querySelector("#operator").innerText += oper;
		dataOPercondition()
	});
});



function dataOPercondition() {
	if (document.querySelector("#upper-value").innerText !== "") {
		dataNum.forEach(item => {
			item.addEventListener("click", function() {
				let lDigit = this.innerText;
				document.querySelector("#current-value").innerText += lDigit;
			});
		});
	} 
}















// click event for each digit button and to display value in current operand
// function currentOperandArea(){
// 	dataNum.forEach(item => {
// 		item.addEventListener("click", function() {
// 			let digit = this.innerText;
// 			document.querySelector(".current-operation").innerText += digit;
// 			let dig = document.querySelector(".current-operation").innerText;
// 			console.log(Number(dig));
// 		});
// 	});
// };


// currentOperandArea()




// clearing the operaton section
function clearOps(){ 
	clearAll.addEventListener("click", function(){
		let clear = "";
		document.querySelector("#current-value").innerText = clear;
		document.querySelector("#upper-value").innerText = clear;
		document.querySelector("#operator").innerText = clear;
	});
};
clearOps();







// dark theme toggle function
const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});