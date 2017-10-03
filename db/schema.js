const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DropzoneSchema = new Schema({
    DropzoneName: {
        type: String,
        required: true
    },
    Aircraft: {
        type: String,
        required: true
    },
    Gearstore: {
        type: Boolean,
        required: true
    }


})

const JumpSchema = new Schema ({
    jumpNumber: {
        type: String,
        required: true,
    },

    jumpName: {
        type: String,
        required: false
    },

    jumpType: {
        type: String,
        require: false
    },

    exitAltitude: {
        type: String,
        require: true,
    },

    deployAltitude: {
        type: String,
        require: true
    },

    accuracy : {
        type: String,
        require: false
    },

    notes: {
        type: String,
        required: false,
    }
})

const JumperSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    totalJumps: {
       type: String,
       required: false
    },
    licence: {
        type: String,
        required: false
    },
    freefallTime: {
        type: String,
        required: false
    },
    jumps: [JumpSchema]
})

// create models from schema
const DropzoneModel = mongoose.model('Dropzone', DropzoneSchema)
const JumperModel = mongoose.model('Jumper', JumperSchema)
const JumpModel = mongoose.model('Jump', JumpSchema)


// export
module.exports = {
    DropzoneModel: DropzoneModel,
    JumpModel: JumpModel,
    JumperModel: JumperModel,
}