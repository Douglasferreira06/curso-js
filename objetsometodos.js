/*function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Jhão",
    notas: [9, 1],
    media: calcMedia
}

var aluno1 = {
    nome: "Raimundo",
    notas: [2,3],
    media: calcMedia
}

function verificaAprovacao(aluno) {
    if (aluno.media() <= 5) {
        console.log("Reprovado, continue estudando");
    } else {
        console.log("Parabéns, você foi excelente");
    }
}

console.log(aluno.nome);
console.log(aluno.media());
verificaAprovacao(aluno);

console.log(aluno1.nome);
console.log(aluno1.media());
verificaAprovacao(aluno1);
*/

function calcMedia(){
    return ( this.nota1 [0] +  this.nota1 [1])/2;
}

var aluno = {
    nome : "Jhão",
    nota1 : [8,9],
    media : calcMedia
    
}

function verificarAprovacao( aluno){
    if( aluno.media () <=6 ){ 
        console.log( "Reprovado")
    } else {
        console.log ( "Aprovado")


        
    }
}

console.log(aluno.nome)
console.log (aluno.media())
verificarAprovacao(aluno)