var idade = parseInt(prompt("Digite aqui a idade: "));

if ((idade>=5) && (idade<=7)) {
	document.write("A categoria é a Infantil A");
}

if ((idade>=8) && (idade<=10)) {
	document.write("A categoria é a Infantil B");
}
 
if ((idade>=11) && (idade<=13)){
	document.write("A categoria é a Juvenil A");
}
if ((idade>=14) && (idade<=17)){
	document.write("A categoria é a Juvenil B");
}
if (idade>=18) {
	document.write("Adulto");
}
