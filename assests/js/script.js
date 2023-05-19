const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    event.preventDefault();
    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    const imc = ((peso / (altura * altura))).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');
   
    if(imc < 18.5){
        description = 'Cuidado! você está abaixo do peso';
        value.classList.add('attention');
    } else if( imc >= 18.5 && imc <=25){
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
        
    }else if( imc >25 && imc <= 30){
        description = "Cuidadao! Você está com sobrepeso!";
        value.classList.add('attention');
    }else if( imc > 30 && imc <= 35 ){
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.add('attention');

    }else if( imc >35 && imc <=40){
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.add('attention');

    }else {
        description = "Cuidado! Você está com obesidade morbida!";
        value.classList.add('attention');
    }



    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;





});