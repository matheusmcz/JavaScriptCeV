let entrada = document.querySelector('input#entrada')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#resultado')
let numeros = []
let soma = 0
let media = 0

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function notinlista(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(isNumber(entrada.value) && notinlista(entrada.value, numeros)){
        numeros.push(Number(entrada.value))
        let item = document.createElement('option')
        item.text = `${entrada.value} Adicionado!`
        lista.appendChild(item)
        resultado.innerHTML = ''
        soma += Number(entrada.value)
        media = soma / (numeros.length)
    }else{
        window.alert('Valor inválido, ou já adicionado.')
    }
    entrada.value = ''
    entrada.focus()
}

function finalizar(){
    if(numeros.length == 0){
        window.alert('Por favor insira um valor!')
    }else{
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        for(let posicao in numeros){
            if (numeros[posicao] > maior)
                maior = numeros[posicao]
            if(numeros[posicao] < menor)
            menor = numeros[posicao]  
            
        }
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total de números cadastrados: ${total}</p>`
        resultado.innerHTML += `<p>Maior valor adicionado: ${maior} / Menor valor: ${menor}</p>`
        resultado.innerHTML += `<p>Soma total = ${soma}</p>`
        resultado.innerHTML += `<p>Média total = ${media}</p>`
    }
    }