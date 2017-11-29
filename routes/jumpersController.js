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
// Route to new Form
router.get('/new', (request,response) => {
    response.render('jumpers/new')
})
//create
router.post('/', (request,response) => {
    const newJumper = request.body

    JumperModel.create(newJumper)
        .then(() => {
            response.redirect('/jumpers')
        })
        .catch((error) => {
            console.log(error)
        })
})
//edit
router.get('/:jumperId/edit', (request, response) => {
    
        const jumperId = request.params.jumperId
    
        JumperModel.findById(jumperId)
            .then((jumper) => {
                response.render('jumpers/edit', {
                    jumper: jumper
                })
            })
            .catch((error) => {
                console.log(error)
            })
    })
//update
router.put('/:jumperId', (request, response) => {
    
        const jumperId = request.params.jumperId
    
        const updatedJumper = request.body
        JumperModel.findByIdAndUpdate(jumperId, updatedJumper, { new: true })
        .then(() => {
            response.render('jumpers', {
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
//show
router.get('/:jumperId', (request,response) => {
    const jumperId = request.params.jumperId

    JumperModel.findById(jumperId)
        .then((jumper) => {
            console.log(jumper)
            response.render('jumpers/show', {
                jumper: jumper
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
//delete
router.get('/:jumperId/delete', (request, response) => {
    
        const jumperId = request.params.jumperId
    
        JumperModel.findByIdAndRemove(jumperId)
            .then(() => {
                response.redirect('/jumpers')
            })
            .catch((error) => {
                console.log(error)
            })
    })
    



module.exports = router;