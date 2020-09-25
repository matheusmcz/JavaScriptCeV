var numero = [0, 2, 5, 9, 7, 3, 10, 250, 360]

// for(var posicao = 0; posicao < numero.length; posicao++){
//     window.alert(`Posição ${posicao}, valor ${numero[posicao]}`)
// }
// for(var posicao in numero){
//     window.alert(`Posicao ${posicao}, valor ${numero[posicao]}`)
// }
function fatorial(n){
    var fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))