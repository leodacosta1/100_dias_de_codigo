let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyz!@#$%¨&*_-=+ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let novaSenha = "";

// pegando o valor escolhido pelo usuário e inputando no html

sizePassword.innerHTML = sliderElement.ariaValueMax;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// gerando a senha

function gerarSenha()
{
    let senha = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++)
    {
        senha += charset.charAt(Math.floor(Math.random() *n))
    }

    containerPassword.classList.remove("hide");

    password.innerHTML = senha;
}

// copiando a senha

function copiarSenha() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(senha);
}