const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DropzoneSchema = new Schema({
    DropzoneName: {
        type: String,
        required: true;
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
const JumperSchema = new schema ({
    TotalJumps: {
       type: Number,
       required: true
    },
    Licence: {
        type: String,
        required: false
    },
    Freefall: {
        type: Number,
        required: true
    }

})

const JumpSchema = new Schema ({
    jumpNumber: {
        type: Number,
        required: true,

    },
    jumpType: {
        type: String,
        require: false
    },

    exitAltitude: {
        type: Number,
        require: true,
    },

    deployAltitude: {
        type: Number,
        require: true
    },

    accuracy : {
        type: Number,
        require: false
    },

    notes: {
        type: string,
        required: false,
    }
})

// create models from schema
const DropzoneModel = mongoose.model('Dropzone', DropzoneSchema)
const JumperModel = mongoose.model('Jumper', JumperSchema)
const JumpModel = mongoose.model('Jump', JumpSchema)


// export
module.exports = {
    JumpModel: JumpModel,
}