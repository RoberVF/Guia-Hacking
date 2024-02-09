const { Router }= require('express')
const route= Router()

route.get('/', (req, res)=>{
    res.render('index.ejs')
})

//Tecnicas
route.get('/redes', (req, res)=>{
    res.render('pages/redes.ejs')
})
route.get('/information-gathering', (req, res)=>{
    res.render('pages/gathering.ejs')
})

route.get('/herramientas', (req,res)=>{
    res.render('herramientas.ejs')
})

module.exports= route

