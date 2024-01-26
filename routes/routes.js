const express = require('express')
const routes = express.Router()


routes.get('/',(req, res)=>{
    //Quando quermos renderizar em outro layout:
    //res.render('login', {layout: 'main'})
    res.render('login', {layout: 'main'})
})
routes.get('/servicos',(req, res)=>{
    res.render('servico')
})


module.exports = routes