const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura**2)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC >18.6 < 24.9) {
            classificacao = 'com peso ideal.';
        }else if (valorIMC >25 < 29.9){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC >30 < 34.9){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC >35 < 39.9){
            classificacao = 'com obesidade grau II (severa).';
        }else {
            classificacao = 'com obesidade grau III (mórbida).';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
