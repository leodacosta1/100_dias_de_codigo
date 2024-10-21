const express = require('express');
const router = express.Router();

const profiles = [
    {name: "Ze", city: "Juiz de Fora", profession: "Desenvolvedor"},
    {name: "Pedro", city: "Petrópolis"},
    {name: "Joao", city: "São tomé das Letras", profession: "Médico"},
]

router.get('/', (req,res,next) => {
    const data = {
        name: "Home",
        date: "31/02/2420",
        profiles: profiles
    }


    res.render('index', data)
})

router.post('/join', (req,res,next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
});

module.exports = router;