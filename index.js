require('./config/conexao')
const express = require ('express')
const app = express()
const porta = 3002
const cors = require ('cors')

// utilizar arquivo no formato json
app.use(express.json())
app.use(cors())

// criando variável para armazenar todas as rotas definidas no arquivo rotas.js
const rotasBanco = require('./rotas')
// para todas as rotas denifinidas no arquivo rotas.js, deve ser considerado o caminho /tarefas 
app.use('/banco', rotasBanco)

// app.get('/teste', (req,res)=>{
//     res.send("Está funcionando!")
// })

app.listen(porta,()=>{
    console.log("Servidor está rodando")
})