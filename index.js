function getUpperVal(){
	return document.querySelector("#upper-value").innerText;
}

function printUpperVal(value){
	document.querySelector("#upper-value").innerText=value;
}

function getCurrentVal(){
	return document.querySelector("#current-value").innerText;
}

function printCurrentVal(){
	return document.querySelector("#current-value").innerText;
}











const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});