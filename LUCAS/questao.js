


// questao 2

// let n1 = parseFloat(prompt("Escreva um numero positivo"))
// let n2 = parseFloat(prompt("Escreva um numero positivo"))

function encontrarPrimos(n1, n2) {
    const primos = [];
  
    for (let i = n1; i <= n2; i++) {
      let ehPrimo = true;
  
      if (i < 2) {
        ehPrimo = false;
      }
  
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          ehPrimo = false;
          break;
        }
      }
  
      if (ehPrimo) {
        primos.push(i);
      }
    }
  
    return primos;
  }

  // console.log(primos) // maneira incorreta de chamar a função

  console.log(encontrarPrimos(3, 27));


//   //questao 3

  let biblioteca = {
    livros: [
      {
        titulo: "O lobo",
        autor: "joaozin",
        genero: "suspense",
        anoDePublicacao: 2000
      },
      {
        titulo: "O Mundo cruel",
        autor: "Lucas",
        genero: "terror",
        anoDePublicacao: 2005
      },
      {
        titulo: "Os Três Porquinhos",
        autor: "Gabriel",
        genero: "Aventura",
        anoDePublicacao: 1777
      }
    ]
  };

  adicionartitulo = prompt("adicione um titulo")
  
  adicionarautor = prompt("adicione o autor")

  adicionargenero = prompt("adicione o genero")

  adicionarano = prompt("adicione o ano de publicação")
  


  biblioteca.titulo.push(adicionartitulo)
  biblioteca.autor.push(adicionarautor)
  biblioteca.genero.push(adicionargenero)
  biblioteca.ano.push(adicionarano)

Maneira incorreta de inserir elementos em objeto
Não foram listados os dados do objeto

  

  
// questao 4


  function contarVogais(str) {
    let count = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }

console.log(contarVogais("Ibmec"))
  