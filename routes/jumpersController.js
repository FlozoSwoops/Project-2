var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js');
const JumperModel = Schema.JumperModel;


//Jumpers Index
router.get('/', (request, response) => {
    
    
    JumperModel.find({})
        //after finds Jumper id from mode THEN
        .then((jumpers) => {
            response.render('jumpers/index', {
                jumpers: jumpers
            })
        })
        .catch((error) => {
            console.log(error)
        })

});

module.exports = router;