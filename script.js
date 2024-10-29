function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 0 && hora < 12) {
         // BOM DIA
         img.src = "img/manha.jpg"
         document.body.style.background = '#f9cf8f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "img/tarde.jpg"
        document.body.style.background = '#753926'
    } else {
        //BOA NOITE
        img.src = "img/noite.jpg"
        document.body.style.background = '#002b63'
    }
}

       
