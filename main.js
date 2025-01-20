const botaoPisca = document.getElementById("buttonPisca");

botaoPisca.addEventListener('click', () => {
    let cor = setarCor();

    document.getElementById("pisca-pisca").style.backgroundColor = cor;
});

function setarCor() {
    let corSetada

    let numeroRed
    let numeroGreen
    let numeroBlue

    numeroRed = numeroRed(Math.random(0, 255));
    numeroGreen = numeroRed(Math.random(0, 255));
    numeroBlue = numeroRed(Math.random(0, 255));

    corSetada = 'rgb('+ numeroRed +','+ numeroGreen +','+ numeroBlue +')'
    return corSetada;
}