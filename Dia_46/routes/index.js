const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    const data = {
        name: "Home",
        date: "31/02/2420",
        profiles: [
            {name: "Ze", city: "Juiz de Fora", profession: "Desenvolvedor"},
            {name: "Pedro", city: "Petrópolis"},
            {name: "Joao", city: "São tomé das Letras", profession: "Médico"},
        ]
    }


    res.render('index', data)
})

module.exports = router;