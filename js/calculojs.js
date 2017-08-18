var botao = document.getElementById("Calcular-imc");
botao.addEventListener("click",function(){

var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr){


	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {nome: tdNome.textContent, 
					peso: tdPeso.textContent, 
					altura: tdAltura.textContent,
					pegaImc: function(){
							if(this.altura != 0){
								var imc = this.peso / (this.altura * this.altura);
								return imc;
							}else{
								console.log("Altura incorreta");
							}

						}};

	var imc = pacienteAtual.pegaImc();

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);
		
		$('.paciente').on("dblclick","td", function(){

			$(this).remove();

		})

})

});

		function validar(){

	var nome = document.formuser.Tnome.value;
	var peso = document.formuser.Tpeso.value;
	var altura = document.formuser.Taltura.value;

	if(nome == ""){
	
		alert("Preencha o campo nome.");
		document.formuser.nome.focus();
		return false;
	}
	if(peso == ""){
		alert("Preencha o campo Peso.");
		document.formuser.peso.focus();
		return false;
	}
	if(altura == ""){
		alert("Preencha o campo altura.");
		document.formuser.altura.focus();
		return false;
	}
}