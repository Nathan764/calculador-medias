function media() {
var nota1 = Number(document.getElementById('nota1').value)
var nota2 = Number(document.getElementById('nota2').value)
var nota3 = Number(document.getElementById('nota3').value)
var nota4 = Number(document.getElementById('nota4').value)
var nota5 = Number(document.getElementById('nota5').value)
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

document.write("Sua media é: ",media);
}