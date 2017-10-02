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
                jumper: jumper
            })
        })
        .catch((error) => {
            console.log(error)
        })

});

//show route
router.get('/:jumpId', (request, response) => {
    const jumperId = request.params.jumperId
    const jumpId = request.params.jumpId
    
    JumperModel.findById(jumperId)
        .then((jumper) => {
            const jump = jumper.jumps.id(jumpId)
            response.render('jumps/show',{
                jump: jump,
                jumperId: jumperId,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router;