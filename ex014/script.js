
function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // Bom dia.
        foto.src = "imagens/fotomanha.png"
        document.body.style.backgroundColor = 'rgba(71, 71, 206, 0.993)'
        
    }else if (hora >= 12 && hora < 18 ){
        // Boa tarde.
        foto.src = "imagens/fototarde.png"
        document.body.style.backgroundColor = 'rgba(224, 224, 180, 0.993)'
    }else{
        // Boa noite.
        foto.src = "imagens/fotonoite.png"
        document.body.style.backgroundColor = 'rgba(36, 37, 90, 0.993)'
    }
}