function encontrar_primo(num1,num2){
    let lista_primos = []
    for (let i = num1; i <= num2 ; i++){
        let count = 0
        for(let j = 1 ; j <= num2;j++){
            if ( i % j == 0){
                count++
            }
        }
        if (count == 2){
            lista_primos.push(i)
        }

    }
    return lista_primos
}
console.log(encontrar_primo(1,9))