const { Router } = require('express')
const route = Router()
const path = require('path')
const fs = require('fs')

route.get('/', (req, res) => {
    const activitiesPath = path.join(__dirname, "activities.json")
    fs.readFile(activitiesPath, "utf-8", (err, data) => {
        if (err) {
            console.log("Error leyendo activities.json")
            // res.status(404).render("errors/404.ejs") // Erroneo dado que no cargaria la pagina principal
            res.render('index.ejs')
            return
        } else {
            const activities = JSON.parse(data)
            res.render('index.ejs', { activities })
        }
    })

})

//Tecnicas
route.get('/redes', (req, res) => {
    res.render('pages/redes.ejs')
})
route.get('/information-gathering', (req, res) => {
    res.render('pages/igathering.ejs')
})

route.get('/herramientas', (req, res) => {
    res.render('herramientas.ejs')
})

module.exports = route

