const express = require ("express");
const router = express.Router();

router.get("/categories",(req,res)=>{
    res.send("Rota de cetegorias")
});

router.get("/admin/categories/new",(req,res)=>{
    res.send("Rota para criar uma nova categoria!");
});

//exportando a variável para usar globalmente
module.exports = router;