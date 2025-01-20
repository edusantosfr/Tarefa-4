const botaoPisca = document.getElementById("buttonPisca");

botaoPisca.addEventListener('click', () => {
    let cor = setarCor();

    document.getElementById("pisca-pisca").style.backgroundColor = cor;
});

function setarCor() {
    let corSetada

    let numeroRed = Math.random()*256;
    let numeroGreen = Math.random()*256;
    let numeroBlue = Math.random()*256;

    corSetada = 'rgb('+ numeroRed +','+ numeroGreen +','+ numeroBlue +')'
    return corSetada;
}