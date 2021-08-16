const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { type: String,
        required:[true, 'name is required'],
        minlength:[3, "must be atleast 3 characters"]
    },
    imgUrl: { type: String, 
        required:[true, 'img is required'],
    },
    chests:{ type: String,
        required:[true, 'chest  is required'],},
    catchPhrase: {type: String, 
        required:[true, 'catchprase is required'],
        minlength:[3, "must be atleast 3 characters"]
    },
    crewPosition: {type: String,
        required:[true, 'crewPosition  is required']},
    pegLeg:{type:Boolean,
        required:[true, 'pegLeg is required']
    },
    eyePatch:{type:Boolean,
        required:[true, 'eye patch is required']
    },
    hook:{type:Boolean,
        required:[true, 'hook is required']
    }

}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);