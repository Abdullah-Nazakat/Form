var router = require('express').Router()
var formModel = require('../model/form')

router.get('/',async function (req, res) {
    await formModel.create(req.query)
    res.send("You Are Fire!")


    router.get('/record',async function (req, res) {
        var form = await formModel.find()
        res.json(form)
    })
    
})

module.exports = router

