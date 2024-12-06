// // variaveis
// var caixa = "bola de futebol"
// console.log(caixa)
// caixa = 'bola de basquete'
// console.log(caixa)


// var primeiro_valor = 10
// var segundo_valor = 20

// console.log(primeiro_valor)
// console.log(segundo_valor)

// // operacoes
// var soma = primeiro_valor + segundo_valor
// console.log(soma)

// var dim = segundo_valor - primeiro_valor
// console.log(dim)

// var mult = primeiro_valor * segundo_valor
// console.log(mult)

// var divi = primeiro_valor/segundo_valor
// console.log(divi)

// // verificar
// var idade = 18

// if(idade >= 16 && idade < 18) {
//     console.log('pode votar')
// }else if(idade >= 18) {
//     console.log('eh maior')
// } else {
//     console.log('nao eh maior')
// }

// var lista = ['bola de futebol', 'bola de basquete', 10, 18]
// console.log(lista)

// // console.log(lista[0])
// // console.log(lista[1])
// // console.log(lista[2])
// // console.log(lista[3])

// // repeticao
// for(posicao in lista) {
//     console.log(lista[posicao])
// }

// // funcao
// function funcao_soma() {
//     var n1 = 100
//     var n2 = 200
//     var soma = n1 + n2
//     console.log(soma)
// }

// funcao_soma()

// function soma_parametros(n1, n2) {
//     var soma = n1 + n2
//     console.log(soma)
// }

// soma_parametros(1, 3)

// function soma_retorno(n1, n2) {
//     var soma = n1 + n2
//     return soma
// }

// var retorno = soma_retorno(50, 50)
// var mudar_retorno = retorno * 10
// console.log(mudar_retorno)


function muda_paragrafo_cima() {
    var paragrafo_cima = document.querySelector('p.pcima')
    paragrafo_cima.innerHTML = 'Paragrafo de cima'
}

function muda_paragrafo_baixo() {
    var paragrafo_baixo = document.querySelector('p.pbaixo')
    paragrafo_baixo.innerHTML = 'Paragrafo de baixo'
}