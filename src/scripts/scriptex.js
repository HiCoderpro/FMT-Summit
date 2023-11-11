//Crie um programa que receba um número e verifique se ele é ímpar ou par.

let exerciciosafazer = Number(prompt('Digite qual exercicio que Fazer (1)Impar ou par (2)Calculo Nota (3)'))
let verific_numbers = document.getElementsByClassName('verify_nubs').innerHTML
console.log(verific_numbers)

//Impar ou par Exercicio calc
verify_nubs
if (exerciciosafazer === 1){
    let numero = Number(prompt('Digite um Numero'))


    if (numero % 2 == 0){
        console.log(numero, 'PAR')
        alert(numero + ' Par')
        
    }else{
        console.log(numero, 'IMPAR')
        alert(numero + ' Impar')
    }
    
    
}
else if(exerciciosafazer == 2){
    let numero1 = Number(prompt('Digite a Primeira Nota '))
    let numero2 = Number(prompt('Digite a Segunda Nota '))
    let numero3 = Number(prompt('Digite a Terceira Nota '))
    let numero4 = Number(prompt('Digite a Quarta Nota '))
    let calculonota = (numero1 + numero2 + numero3 + numero4)
    console.log(calculonota)
    alert(calculonota /4 )    
}
else if(exerciciosafazer == 3){
// Função para calcular o volume da caixa
    function calcularVolume(comprimento, largura, altura) {
        return comprimento * largura * altura;
    }

    // Exemplo de valores para as dimensões da caixa
    var comprimentoDaCaixa = 5;
    var larguraDaCaixa = 3;
    var alturaDaCaixa = 2;

    // Chamando a função e armazenando o resultado em uma variável
    var volumeDaCaixa = calcularVolume(comprimentoDaCaixa, larguraDaCaixa, alturaDaCaixa);

    // Exibindo o resultado no console
    console.log("O volume da caixa é: " + volumeDaCaixa);
    }
//switch

//let busque = document.getElementsByClassName('switch-demo')
let conteudo = document.getElementById('switch-demo').innerHTML


let periodo_dia = 'Manha'
switch(periodo_dia){
    case 'Manha':
        console.log('Bom dia Mestre')
        //faz o retorno para o HTML usando document.write
        document.write('<center> o Periodo agora e '+ (periodo_dia))
         break;
    case 'tarde':
        console.log('Boa tarde Mestre')
        break;
    case 'noite':
        console.log('Boa noite Mestre')
        break;
    }