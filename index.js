//Criando um Servidor http
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


let app = express()
/**Usando o body-parser -  */
app.use(bodyParser.urlencoded({ extended: false })) /**Fazendo a codificação */
app.use(bodyParser.json())/**Todos os dados que pegar converte em json */
/**
 * No consign incluio o arquivo de rotas e abre no (app)
 */
consign().include('/routes/').into(app)



app.listen(9000, '127.0.0.1', ()=> {
    console.log('servidor rodando')
})
