const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', function (req, res) {
    res.redirect('/poisons')
})

router.get('/poisons', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("An error has occured :'(")

        var poisonsObj = JSON.parse(data)
        res.render('home', poisonsObj)
    })
})

router.get('/poisons/:id', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("An error has occured :'(")

        var id = Number(req.params.id)
        var poisonsObj = JSON.parse(data)
        var poison = poisonsObj.poisons.find((poison) => poison.id === id)
        res.render('poison', poison)
    })
})

router.get('/poisons/edit/:id', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("An eoor has occured :'(")

        var id = Number(req.params.id)
        var poisonsObj = JSON.parse(data)
        var poison = poisonsObj.poisons.find((poison) => poison.id === id)
        res.render('poisons/edit', poison)
    })
})



module.exports = router