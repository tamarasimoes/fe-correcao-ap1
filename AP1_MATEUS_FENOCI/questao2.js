
function encontrarPrimos(inicio, fim) {

    let arr = []
    let position = 0

    for (let i = inicio; i <= fim; i++) {

        let count = 0

        for (let j = 1; j <= i; j++) {

            if (i % j === 0) {

                count++
            }
        }

        if (count == 1){
            
            arr[position] = i

            position++

        }
        if (count == 2) {

            arr[position] = i

            position++
            
        }

    }
    
    return arr
}

console.log(encontrarPrimos(40, 80))