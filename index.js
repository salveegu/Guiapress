const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// conexão com o banco de dados
const connection = require ("./database/database");
connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso no banco de dados!");
}).catch((error)=>{
    console.log(error);
});

//VieW engine - consumindo o ejs para renderização do front no back
app.set('view engine','ejs');

//carregando arquivos estaticos - na pasta public
app.use(express.static('public'));

//body parser  pega os dados do formulario e dados json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.render('index');
});

app.listen (8080, ()=>{
    console.log("O servidor está online!");
})
