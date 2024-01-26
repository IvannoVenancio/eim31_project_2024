const express = require('express')
const ClienteController = require('../controllers/ClienteController')
const routes = express.Router()


routes.get('/',ClienteController.view)
routes.get('/servicos',(req, res)=>{
    res.render('servico')
})

routes.post('/cadastro',ClienteController.create )


module.exports = routes