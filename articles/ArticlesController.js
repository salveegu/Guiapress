const express = require ("express");
const router = express.Router();

router.get("/articles",(req,res)=>{
    res.send("Rota de artigos")
});

router.get("/admin/articles/new",(req,res)=>{
    res.send("Rota para criar uma novo artigo!");
});

//exportando a variável para usar globalmente
module.exports = router;