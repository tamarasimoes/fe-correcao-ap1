// Questão 2
function encontrarPrimos(inicio, fim) {
    let sequencia = [];
    if (typeof inicio !== 'number' || typeof fim !== 'number') {
        console.log("Valor inválido");
    } else {
        for (let i = inicio; i <= fim; i++) {
            let primo = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    primo = false;
                    break;
                }
            }
            if (primo && i > 1) {
                sequencia.push(i);
            }
        }
    }
    return sequencia;
}

console.log(encontrarPrimos(5, 50));

// Questão 3
var biblioteca = {
    livros: [
        {titulo:'livro de python', autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'},
        {titulo: 'livro de python', autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'},
        {titulo: 'livro de python', autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'}
    ]
};

var novoLivro = {
    titulo: 'java',
    autor: "tamara",
    genero: "edu",
    anoPublicacao: "2010"
};

biblioteca.livros.push(novoLivro);

function listarLivros(biblioteca) {
    for (let i = 0; i < biblioteca.livros.length; i++) {
        console.log(biblioteca.livros[i]['titulo']);
    }
}

listarLivros(biblioteca);

// Questão 4
function contarVogais(string) {
    var vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let nVogais = 0;
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            nVogais++;
        }
    }
    return nVogais;
}

let palavra = "exemplo";
console.log("O número de vogais nesta palavra é: " + contarVogais(palavra));
