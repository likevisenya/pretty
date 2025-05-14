const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
})

app.post("/cadastro", (req, res) =>{
    const nome = req.body.nome
    const cargo = req.body.nome
    res.send("bla bla bla");
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})

