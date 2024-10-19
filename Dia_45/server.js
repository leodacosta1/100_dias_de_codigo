const express = require('express');
const cors = require('cors');
const axios = require('axios');

// const para guardar a api. Pensar em uma forma manter a api segura. Talvez usando import com gitignore
const api_key = '';

const app = express();
app.use(cors());
app.use(express.json());

// Rota para obter dados da API
app.get('/random-cats', async (req, res) => {
    try {
        // Consome a api com axios
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            headers: {
                "x-api-key": api_key,
            },
        });

        // Exibindo a resposta da requisição
        res.json(response.data);
    } catch (error) {
        console.log("Erro ao consumir a API", error);
        res.status(500).json({ error: "Erro ao consumir a API" });
    }
});



// Criando o servidor
const port = 8081;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})