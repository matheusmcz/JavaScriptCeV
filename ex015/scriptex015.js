var data = new Date()
var anoatual = data.getFullYear()
var resultado = document.querySelector('div#resultado')

var genero = ''

function verificar(){
    var anonascimento = Number(document.getElementById('txtano').value)
    var idade = anoatual - anonascimento
    if (anonascimento == 0 || anonascimento > anoatual){
        window.alert('Algo de errado, não está certo!')
    }else{
        var sexo = document.getElementsByName('radsexo')       
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade < 14){
                retorno(`Detectamos um ${genero} de ${idade} anos.`, 'imagens/homemcrianca.jpg')
            }else if(idade < 25){
                retorno(`Detectamos um ${genero} de ${idade} anos.`, 'imagens/homemjovem.jpg')
            }else if(idade < 60){
                retorno(`Detectamos um ${genero} de ${idade} anos.`, 'imagens/homemadulto.jpg')
            }else{
                retorno(`Detectamos um ${genero} de ${idade} anos.`, 'imagens/homemidoso.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade < 14){
                retorno(`Detectamos uma ${genero} de ${idade} anos.`, 'imagens/mulhercrianca.jpg')
            }else if(idade < 25){
                retorno(`Detectamos uma ${genero} de ${idade} anos.`, 'imagens/mulherjovem.jpg')
            }else if(idade < 60){
                retorno(`Detectamos uma ${genero} de ${idade} anos.`, 'imagens/mulheradulta.jpg')
            }else{
                retorno(`Detectamos uma ${genero} de ${idade} anos.`, 'imagens/mulheridoso.jpg')
            }
        }
    }       
}

function retorno(faixahetaria, imagem){
    var img = document.createElement('Img')
    img.setAttribute('id', 'foto')
    resultado.innerHTML = faixahetaria
    img.src = imagem
    resultado.appendChild(img)

}