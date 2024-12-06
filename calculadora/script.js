function incluir(incluir) {
    var resultado = document.querySelector('p.resultado')
    if(Number(resultado.innerHTML) === 0) {
        resultado.innerHTML = incluir
    } else {
        resultado.innerHTML = resultado.innerHTML + incluir
    }
}

function limpar() {
    var resultado = document.querySelector('p.resultado')
    resultado.innerHTML = 0
}

function igual() {
    var resultado = document.querySelector('p.resultado')
    resultado.innerHTML = eval(resultado.innerHTML)
}

function limpar_ultimo() {
    var resultado = document.querySelector('p.resultado')
    if(resultado.innerHTML.length === 1) {
        resultado.innerHTML = 0
    } else {
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}