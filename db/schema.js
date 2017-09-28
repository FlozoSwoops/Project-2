const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JumpSchema = new Schema ({
    jumpNumber: {
        type: Number,
        required: true,

    },
    jumpName: {
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

const JumpModel = mongoose.model('Jump', JumpSchema)


// export
module.exports = {
    JumpModel: JumpModel,
}