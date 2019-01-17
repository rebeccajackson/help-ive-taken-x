const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', function (req, res) {
    fs.readFile('./data.json','utf8', function(err,res))
    res.render('home')
})



module.exports = router