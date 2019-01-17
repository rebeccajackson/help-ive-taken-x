const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', function (req, res) {
    res.redirect('/poisons')
})

router.get('/poisons', function (req, res) {
    fs.readFile('./data.json', function (err, data) {
        if (err) return res.status(500).send("An error has occured :'(")

        var poisonsObj = JSON.parse(data)
        res.render('home', poisonsObj)
    })
})

router.get('/poisons/:id', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("An error has occured :'(")


        var poisonsObj = JSON.parse(data)
        console.log(poisonsObj)
        res.render('poisons/poison', poisonsObj)
    })
})



module.exports = router