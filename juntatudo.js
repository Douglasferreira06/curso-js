var nome = ["Douglas", "Jhão", "Vanusa cú de burro"];
var notasA = [8.2, 8.5, 7.0];
var notasB = [9.0, 5.5, 9.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {
    if (media >= 7)
        return "Aprovado";
    else
        return "Reprovado";
}

for (var index = 0; index < nome.length; index++) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);
    console.log(nome[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        passou(m)
    );
}
