const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const hojaSchema = new Schema({
    _id: {
        type: String,
        trim:true
    },
    nombres: {
        type: String,
        trim: true
    },
    perfil_prof: {
        type: String,
        trim: true
    },
    competencias: {
        type: Array,
        trim: true
    }
    
},{collection : 'hoja'});

module.exports = mongoose.model('Hoja', hojaSchema);