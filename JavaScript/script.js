var inputAdulto = document.getElementById("adulto")
var inputCrianca = document.getElementById("crianca")
var inputDuracao = document.getElementById("duracao")
var resultado = document.getElementById("resultado")

function calcular(){

    let adultos = inputAdulto.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value

    let totalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * crianca)

    let totalCerveja = cervejaPorPessoa(duracao) * adultos  

    let totalBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao)/2 * crianca)

    resultado.innerHTML = `<p style = "font-weight: bold;">${totalCarne}g de carnes</p>`
    resultado.innerHTML += `<p style = "font-weight: bold;">${totalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p style = "font-weight: bold;">${totalBebida}ml de Bebida</p>`
}

function carnePorPessoa(duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidaPorPessoa(duracao){
    if (duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}