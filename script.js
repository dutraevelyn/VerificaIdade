function verificar() {
    data = new Date() //definir a data
    ano = data.getFullYear() //vai pegar a data e os seus 4 dígitos
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto') //img id='foto'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemF.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona um elemento
    }
}