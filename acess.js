let usuarioacess = prompt('Digite seu Usuario de Acesso! ')
let senhaacess = prompt('Digite sua Senha de acesso!')

let u_acess = 'admin'
let p_acess = 'admin'

//Faz a verificaçao usando If e ELse para ver se o Usuario esta cadastrado!
if (usuarioacess == u_acess){
    if(senhaacess == p_acess){
        alert("Usuario Logado com Sucesso!");
        window.location = 'administador.html';
        //Fazemos o redirecionamento da pagina para o inicio apos alguns segundos
        setTimeout(function() {
            window.location.replace("http://127.0.0.1:5500/exercicios.html");
          }, 10);
    




    }
    else{
        alert('Usuario ou Senha Incorreta!')

    }
    

}
else{
    alert('Dados Incorretos!')
}
//alert('Bem vindo usuario!')