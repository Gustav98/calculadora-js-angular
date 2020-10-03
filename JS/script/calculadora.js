var numero = '';
var displayBuffer = "";
var termos = [undefined, undefined, undefined];
var resultado = undefined;

function limparTudo(){
	limparMemoria();
	limpaVisor();
}

function limparMemoria(){
	numero = '';
	termos = [undefined, undefined, undefined];
	resultado = undefined;
}

function limpaVisor(){
	displayBuffer = "";
	let tela = document.getElementById("visor");
	tela.value = displayBuffer
}

function mostraNoVisor(conteudo) {
	displayBuffer = displayBuffer.concat(conteudo);
	let tela = document.getElementById("visor");
	tela.value = displayBuffer;
}

function pressionaNumero(num){
	numero = numero.concat(num);
	mostraNoVisor(num);
}

function pressionaOperacao(op){
	if (termos[1] == undefined) {
		termos[0] = numero;
		termos[1] = op;
		mostraNoVisor(op);
		numero = "";
	}
}

function pressionaIgual() {
	if (termos[0] != undefined && termos[1] != undefined && numero != "") {
		
		termos[2] = numero;
		var mantemResultado;
	
		switch (termos[1]) {
			case "+":
				resultado = Number(termos[0]) + Number(termos[2]);
				break;
	
			case "-":
				resultado = Number(termos[0]) - Number(termos[2]);
				break;
	
			case "x":
				resultado = Number(termos[0]) * Number(termos[2]);
				break;
	
			case "÷":
				resultado = Number(termos[0]) / Number(termos[2]);
				break;
		}
		mantemResultado = resultado
		limpaVisor();
		mostraNoVisor(resultado);
		limparMemoria();
		numero = mantemResultado
	}
}
