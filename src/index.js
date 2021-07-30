const express= require('express')
const app= express()
const path= require('path')

const PORT= process.env.PORT || 3000

//Settings
app.set('port', PORT)
app.set('views', path.join(__dirname, 'views'))

//Middlewares
app.use('html', require('ejs').renderFile)
app.use(express.static(path.join(__dirname, '/public')))

//Routes
app.use(require('./routes/index.routes'))

//Error 404
app.use((req, res)=>{
    res.status(404).render("errors/404.ejs")
})

//Escucha
app.listen(PORT, ()=>{
    console.log("Server on port", PORT)
})