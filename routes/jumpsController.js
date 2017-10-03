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
router.get('/new', (request,response) => {
    response.render('jumps/new')
})

//create
router.post('/', (request, response) => {
    const jumperId = request.params.jumperId
    const newJump = request.body

    JumperModel.findById(jumperId)
        .then((jumper) => {
            jumper.jumps.push(newJump)
            return jumper.save
        })
        .then((jumper) => {
            response.redirect(`/jumpers/${jumperId}/jumps`)
        })
})

//edit
router.get('/:jumpId/edit', (request, response) => {

    const jumperId = request.params.jumperId
    const jumpId = request.params.jumpId

    JumperModel.findById(jumperId)
        .then((jumper) => {
            const jump = jumper.jumps.id(jumpId)

            response.render('jumps/edit', {
                jump: jump,
                jumperId: jumperId
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//update
router.put('/:jumpId', (request, response) => {

    const jumperId = request.params.jumperId
    const jumpId = request.params.jumpId
    const updatedJump = request.body

    JumperModel.findById(jumperId)
        .then((jumper) => {
            const jump = jumper.jumps.id(jumpId)

            jump.name = updatedjump.name
            jump.price = updatedjump.price

            return jumper.save()
        })
        .then(() => {
            response.redirect(`/jumpers/${jumperId}/jumps/${jumpId}`)
        })

})

//show route
router.get('/:jumpId', (request, response) => {
    const jumperId = request.params.jumperId
    const jumpId = request.params.jumpId

    JumperModel.findById(jumperId)
        .then((jumper) => {
            const jump = jumper.jumps.id(jumpId)
            response.render('jumps/show', {
                jump: jump,
                jumperId: jumperId,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router;