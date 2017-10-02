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

//new route
router.get('/new', (request, response) => {
    const jumperId = request.params.jumperId
    response.render('jumps/new', {
        jumperId: jumperId
    })
})

//create
router.post('/', (request, response) => {
    const jumperId = request.params.jumperId
    const newJump = request.body

    JumperModel.findById(jumperId)
        .then ((jumper) =>{
            jumper.jumps.push(newJump)
            return jumper.save
        })
        .then((jumper) => {
            response.redirect(`/jumpers/${jumperId}/jumps`)
        })
})

//edit
router.get('/:snowboardId/edit', (request, response) => {
    
        const jumperId = request.params.jumperId
    
        const snowboardId = request.params.snowboardId
    
        JumperModel.findById(jumperId)
            .then((jumper) => {
                const snowboard = jumper.jumps.id(snowboardId)
    
                response.render('jumps/edit', {
                    jump: snowboard,
                    jumperId: jumperId
                })
            })
            .catch((error) => {
                console.log(error)
            })
    })

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