function contar_vogais(string){
    let list = string.split('')
    let tamanho = string.length
    let count = 0
    let a = 'a'
    let i = 'i'
    let e = 'e'
    let o = 'o'
    let u = 'u'
    for(let j = 0; j < tamanho; j++){
        if( list[j] == a | list[j] == e | list[j] == i | list[j] == o | list[j] == u ){
            count ++
        }
    }
    return count;
}
console.log(contar_vogais('banana'))