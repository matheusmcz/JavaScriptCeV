function calcular(){
    var numero = document.getElementById('numero')
    var selecttabuada = document.getElementById('selecttabuada')
    if (numero.value.length == 0){
        window.alert('Insira um valor válido!')
    }else{
        var num = Number(numero.value)
        var c = 1
        selecttabuada.innerHTML = ''
        while(c<=10){
            var resultado = document.createElement('option')
            resultado.text = `${num} x ${c} = ${num*c}`
            selecttabuada.appendChild(resultado)
            c++
        }
    }
}