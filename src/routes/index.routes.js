const { Router } = require('express')
const route = Router()

route.get('/', (req, res) => {
    const activities = [
        {
            name: "Redes Wireless",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/redes",
            image: "images/redes.jpg"
        },
        {
            name: "Phising",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/",
            image: "images/phishing.jpg"
        },
        {
            name: "Hardening",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/",
            image: "images/hardening.jpg"
        },
        {
            name: "Information Gathering",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/information-gathering",
            image: "images/igathering.jpg"
        },
        {
            name: "Escaneo y análisis",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/",
            image: "images/analisis.jpg"
        },
        {
            name: "Explotación",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/",
            image: "images/explotacion.jpeg"
        },
        {
            name: "Post explotación",
            description: "Hacking de redes Wireless. Se comprometera la seguridad de las claves WEP/WPA/WPA2. Se ejecutaran ataques de deautenticacion, ataques CTS, ataques EvilTwin y ataques a WPS entre otros",
            url: "/",
            image: "images/post.jpg"
        }
    ]
    res.render('index.ejs', {activities})
})

//Tecnicas
route.get('/redes', (req, res) => {
    res.render('pages/redes.ejs')
})
route.get('/information-gathering', (req, res) => {
    res.render('pages/gathering.ejs')
})

route.get('/herramientas', (req, res) => {
    res.render('herramientas.ejs')
})

module.exports = route

