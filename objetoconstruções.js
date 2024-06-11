/*function criarAluno( nome, n1,n2){
    return {
        nome:nome,
        nota1:n1,
        nota2:n2,
        media:function(){
            return(this.nota1 + this.nota2)/2;
        }
    }

}
var turma = [
    criarAluno("frederico",8,9.9)
]
var aluno = turma[1];

console.log(aluno);
console.log( aluno.media());*/

function criarAluno(nome, n1, n2) {
    return {
        nome: nome, // Atributo nome do aluno
        nota1: n1,  // Primeira nota
        nota2: n2,  // Segunda nota
        media: function() { // Método para calcular a média das notas
            return (this.nota1 + this.nota2) / 2;
        }
    };
}

// Criando um array 'turma' com um objeto 'aluno'
var turma = [
    criarAluno("frederico", 8, 9.9),
    criarAluno ("douglas", 3, 9.9),
    criarAluno("gelada", 4, 9.9), // Adicionando o aluno 'frederico' com notas 8 e 9.9
];

// Acessando o primeiro aluno no array 'turma'

var aluno = turma [2]; // Corrigido para acessar o primeiro aluno

// Exibindo o nome do aluno e a média das notas no console
console.log("Nome do aluno:", aluno.nome); // Isso exibirá o nome do aluno
console.log("Média do aluno:", aluno.media()); // Isso exibirá a média das notas do aluno
