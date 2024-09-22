const API = `e58bfd93a525a2df533b979eb459293d`;

function dadosNaTela(dados)
{
    // Exibindo dados consumidos da API da telas com DOM
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp);
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector("umidade").innerHTML = "Umidade: " + dados.main.umidity + "%";
    document.querySelector("img-previsao").src = `https://openweathermap.org/img/wm/${dados.weather[0].icon}.png`    
}

async function buscarCidade(cidade)
{
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    dadosNaTela(dados);
}

function clickButton() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}