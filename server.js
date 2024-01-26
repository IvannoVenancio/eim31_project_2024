const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')
const express = require('express');
const routes = require('./routes/routes');
require('./database/connections')
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'handlebars')
app.use(routes)

app.listen(port, ()=>{
    console.log(`Servidor Express rodando na porta ${port}`)
})


//npx sequelize-cli model:generate --name cliente- --attributes name:string,age:number