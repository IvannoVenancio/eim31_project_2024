const Cliente = require('../models/cliente')


exports.create = async(req, res) =>{
    try {
        const data = req.body;
        const result = await Cliente.create(data)
        console.log(result)
        return res.redirect('back') 
    } catch (error) {
        console.log(error)
    }

}

exports.view = async (req, res)=>{
    //Quando quermos renderizar em outro layout:
    //res.render('login', {layout: 'main'})
    const clientes = await Cliente.findAll()
    res.render('login', {clientes, layout: 'main'})
}