// Questão 2

function encontrarPrimos(inicio,fim) {
    let sequencia = []
    if (inicio != Number) {
        console.log("Valor invalido")
    } else if (fim != Number){
        console.log("Valor invalido")
    } else {
        for (i=inicio, i < fim, i++) { // erro de sintaxe
            
        }
    }

}

console.log(encontrarPrimos(5, 50))


// Questão 3

var biblioteca = [
    {titulo:'livro de python',autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'},
    {titulo: 'livro de python',autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'},
    {titulo: 'livro de python',autor: 'Sabrina', genero: 'edu', anoPublicacao: '2020'},
]

const livro = {
    titulo: 'java',
    autor: "tamara",
    genero: "edu",
    anoPublicacao: "2010"
}

biblioteca.push({livro})

function listarLivros(biblioteca){
    for (i=0,i < biblioteca.length, i++){ // erro de sintaxe
        console.log(biblioteca[i]['titulo'])
        
    }
}

console.log(listarLivros(biblioteca))

// Questão 4

function contarVogais(string) {
    var Vogais = [A,E,I,O,U,a,e,i,o,u];
    let nVogais;
    for (i = 0, i < string.lenght, i++) { // erro de sintaxe
        if (string[i] in Vogais) { 
            nVogais += 1
        } 
    }
    return nVogais
    
}

console.log("O número de vogais dessa palavra é"+ nVogais)
