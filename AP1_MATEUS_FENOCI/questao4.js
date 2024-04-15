const VOGAIS = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
const VOGAIS_SIZE = VOGAIS.length

function contarVogais(string) {
    let size = string.length
    let count = 0
   
    for (let i = 0; i < size; i++) {
       for (let j = 0; j < VOGAIS_SIZE; j++) {
           if (string[i] === VOGAIS[j]) {
            count++
           }
       }
    } 
    return count
}

console.log(contarVogais("Ibmec"))