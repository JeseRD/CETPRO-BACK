const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const mentorSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    perfiles: {
        type: Array,
        trim: true
    },
    competencias: {
        type: Array,
        trim: true
    },
    mentorizados_id: {
        type: Array,
        trim: true
    },
    nivel: {
        type: Number,
        trim: true
    }
    
});

module.exports = mongoose.model('Mentor', mentorSchema);