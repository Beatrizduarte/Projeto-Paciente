var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");
var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");
var tdPeso3 = document.getElementById("peso-3");
var tdAltura3 = document.getElementById("altura-3");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var peso2 = tdPeso2.textContent;
var altura2 = tdAltura2.textContent;
var peso3 = tdPeso3.textContent;
var altura3 = tdAltura3.textContent;

if(altura != 0){
	var imc = peso / (altura * altura);

	var tdImc = document.getElementById("imc-1");
	tdImc.textContent = imc;

	console.log(imc);
}

else {
	console.log("Altura incorreta");
}
if(altura2 != 0){
	var imc2 = peso2 / (altura2 * altura2);

	var tdImc2 = document.getElementById("imc-2");
	tdImc2.textContent = imc2;

	console.log(imc2);
}
else {
	console.log("Altura incorreta");
}
if(altura3 !=0){
	var imc3 = peso3 / (altura3 * altura3);

	var tdImc3 = document.getElementById("imc-3");
	tdImc3.textContent = imc3;

	console.log(imc3);
}
else {
	console.log("Altura incorreta");
}