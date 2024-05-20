// Questão 2
function encontrarPrimos(inicio, fim) {
    let primos = []
    for (let i = inicio; i <= fim; i++) {
        let count = 0
        for (let j = 1; j <= 2; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 2) {
            primos.push(i)
        }
    }
    return primos
}
console.log(encontrarPrimos(1,9))

// Questão 3
const biblioteca = {
    livro0: {
        'titulo': 'O olho do mundo',
        'autor': 'Robert Jordan',
        'genero': 'ficcao',
        'anoPublicacao': 1990,
    },

    livro1: {
        'titulo': 'A grande caçada',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1990,
    },

    livro2: {
        'titulo': 'O dragão renascido',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1991,
    },

    livro3: {
        'titulo': 'A ascenção da sombra',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1992,
    },

    livro4: {
        'titulo': 'As chamas do paraíso',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1993,
    },

    livro5: {
        'titulo': 'O senhor do caos',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1994,
    },

    livro6: {
        'titulo': 'Uma coroa de espadas',
        'autor': 'Robert Jordan',
        'genero': 'fic',
        'anoPublicacao': 1996,
    }
}

biblioteca['livro7'] = {
    titulo: 'O caminho das adagas',
    autor: 'Robert Jordan',
    genero: 'fic',
    anoPublicacao: '1998',
}

console.log(biblioteca);

// Questão 4
function contarVogais(string){
    let list = string.split('')
    let size = string.length
    let count = 0
    let a = 'a'
    let i = 'i'
    let e = 'e'
    let o = 'o'
    let u = 'u'

    for(let j = 0; j < size; j++){
        if(list[j] == a || list[j] == e || list[j] == i || list[j] == o || list[j] == u){
            count++
        }
    }
    return count;
}
console.log(contarVogais('rafael'))