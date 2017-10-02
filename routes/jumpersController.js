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
router.post('/', (request,respose) => {
    const newJumper = request.body

    JumperModel.create(newJumper)
        .then(() => {
            response.redirect('/jumpers')
            console.log(newJumper)
        })
        .catch((error) => {
            console.log(error)
        })
})

//edit


module.exports = router;