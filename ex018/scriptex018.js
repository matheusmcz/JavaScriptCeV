
var resultado = document.querySelector('div#resultado')

function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value

    if (inicio == '' || fim == '' || passo == ''){
        window.alert('[ERRO] Insira os dados corretamente.')
    }else{
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (passo <= 0){
            passo = 1
        }
        for(var c = inicio; c <= fim; c += passo){
            resultado.innerHTML += ` ${c}`
        }
    }
    }
   
