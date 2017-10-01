require('dotenv').config();

//db setup
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;
// error and connected messages
db.on('error', function(err) {
    console.log(err);
});

db.once('open', function () {
    console.log("Connected to MongoDB!")
});

// require Schemafile
const Schema = require('./schema.js')

// pull in specific schema from schema.js
const JumpModel = Schema.JumpModel;
const JumperModel = Schema.JumperModel;


//creating jump info
const chileanWay = new JumpModel({jumpNumber: 89, jumpName:'Chilean Round', jumpType:'Hybrid', exitAltitude: 14000, deployAltitude: 3500, accuracy: 7, notes: 'Zoo Dive'})
const wingsuitRodeo = new JumpModel({jumpNumber: 99, jumpName:'Wingsuit Rodeo', jumpType:'Wingsuit', exitAltitude: 14000 , deployAltitude: 3500, accuracy: 0, notes:'So much gnar'})
const eclipseJump = new JumpModel({jumpNumber: 129, jumpName:'Eclipse Jump', jumpType:'Highpull', exitAltitude: 14000, deployAltitude: 3500, accuracy: 10, notes: 'Woo Hoo'})
// assign each to a variable array
const jumps = [chileanWay, wingsuitRodeo, eclipseJump]

//creating jumper info
const mark = new JumperModel({name:"Mark", totalJumps: 135, licence: "B", freefallTime: 1000})
const raffi = new JumperModel({name:"Raffi", totalJumps: 1921, licence: "D", freefallTime: 4000})

JumperModel.remove({}, function (err) {
    console.log(err);
});


// assign to variable
const jumpers = [mark, raffi]

jumpers.forEach((jumper) => {
    jumper.jumps = jumps

    jumper.save()
        .then((jumper) => {
            console.log(`${jumper.name} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
});


