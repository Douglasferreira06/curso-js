var aluno = "João";
var nota01 = 5;
var nota02 = 9;

var media = (nota01 + nota02) / 2;

var conceito = "";
if (media >= 9) {
  conceito = "Ótimo";
} else if (media >= 6) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

console.log(aluno);
console.log(media);
console.log(conceito);

switch (conceito) {
  case "Ótimo":
    console.log("Parabéns, continue assim");
    break;

  case "Bom":
    console.log("Muito bom, quase lá");
    break;

  case "Regular":
    console.log("Poxa, não foi dessa vez. Não deixe de praticar");
    break;
}
