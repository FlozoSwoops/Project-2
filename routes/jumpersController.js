var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js');
const JumpModel = Schema.JumperModel;



router.get('/', (request, response) => {
    
    //grabing jump id
    const jumperId = request.params.jumperId

    JumperModel.find({})
        //after finds Jumper id from mode THEN
        .then((jumps) => {
            response.render('jumps/index', {
                jumps: jumps
            })
        })
        .catch((error) => {
            console.log(error)
        })

});

module.exports = router;