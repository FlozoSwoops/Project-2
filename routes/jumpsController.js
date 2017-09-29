var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js');
const JumpModel = Schema.JumpModel;



router.get('/', (request, response) => {
    
    //grabing jump id
    const jumpId = request.params.jumpId

    JumpModel.find({})
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