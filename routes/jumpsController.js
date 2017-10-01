var express = require('express');
var router = express.Router({ mergeParams: true });

const Schema = require('../db/schema.js');
const JumperModel = Schema.JumperModel;



router.get('/', (request, response) => {
    
    //grabing jump id
    const jumperId = request.params.jumperId

    JumperModel.findById(jumperId)
        .then((jumper) => {
            response.render('jumps/index', {
                jumps: jumps
            })
        })
        .catch((error) => {
            console.log(error)
        })

});

module.exports = router;