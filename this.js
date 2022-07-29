// console.log(this === global)
// console.log(this === module.exports)
// console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)

}

logThis()

//Fora de uma função, o 'this' aponta para o module.exports;
//Dentro de uma função, o 'this' aponta para o objeto global.
//Em uma arrow function, o 'this' aponta para o objeto global, retornando um objeto vazio.