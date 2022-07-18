const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mentorizadosSchema = new Schema({
    codigo: {
        type: String,
        trim:true
    },
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
    nivel: {
        type: Number,
        trim: true
    },
    objetivos: {
        type: Array,
        trim: true
    }   
});

module.exports = mongoose.model('Mentorizado', mentorizadosSchema);