var code = parseInt(prompt("Digite o código do aluno:"));
var grade01 = parseFloat(prompt("Digite a primeira nota:"));
var grade02 = parseFloat(prompt("Digite a segunda nota:"));
var grade03 = parseFloat(prompt("Digite a terceira nota:"));
higher = 0;

if (grade01>grade02 && grade01>grade03) {
	average = (((grade01*4)+(grade02*3)+(grade03*3))/10)
}else if (grade02>grade01 && grade02>grade03) {
	average = (((grade02*4)+(grade01*3)+(grade03*3))/10)
}else if (grade03>grade01 && grade03>grade01) {
	average = (((grade03*4)+(grade01*3)+(grade02*3))/10)
}else {
	document.body.append("Error")
}
