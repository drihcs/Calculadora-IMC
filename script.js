const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = parseFloat (peso / (altura**2)).toFixed(1);

    let classificacao = 
     valorIMC < 18.5 ? 'abaixo do peso.' :
     valorIMC <= 24.9 ? 'com peso ideal.' :
     valorIMC <= 29.9 ? 'levemente acima do peso.' :
     valorIMC <= 34.9 ? 'com obesidade grau I.' :
     valorIMC <= 39.9 ? 'com obesidade grau II.' :
    'com obesidade grau III.';

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
