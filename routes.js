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

router.get('/poisons/edit', function (req, res) {
    
     fs.readFile('./data.json', 'utf8', function (err, data) {
         if (err) return res.status(500).send("An error has occured :'(")
        
         var id = Number(req.params.id)
         var poisonsObj = JSON.parse(data)
         var poison = poisonsObj.poisons.find((poison) => poison.id === id)
         res.render('edit')
 
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




router.post('/edit', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("An error has occured :'(")

        var newPoisonId = (poisonsObj.poisons.length + 1)
        // var id = Number(req.params.id)
        // var poisonsObj = JSON.parse(data)
        // var poison = poisonsObg.poison.find((poison) => poison.id === id)
        // res.render('poisons/edit', poison)

        var newClass = req.body.name.replace(/\s+/g, '-').toLowerCase()
        console.log(newClass)
        // var newPoisonId =(poisonsObj.poisons.length +1);
        var newPoison = {
            id: newPoisonId,
            name: req.body.name,
            class: newClass,
            image: '/images/default.png',
            symptoms: [] // Will finish this once i see what format the form returns the list in
        }

        poisonsObj.poisons.push(newPoison)
        res.redirect('/poisons')
    })
})



module.exports = router