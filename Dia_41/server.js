const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use(cors())

// rota utilizando parâmetros

app.get('/users/:id', (request, response) => {
    const userId = request.params.id;
    return response.send(`user ID: ${userId}`);
})

app.listen(8080, () => console.log('servidor rodando na porta 8080'))