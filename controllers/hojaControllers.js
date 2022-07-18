//cuando se crea un nuevo mentor

const Hoja = require('../models/Hoja');

exports.nuevaHoja = async (req, res, next ) => {
    // TODO : Insertar en la base de datos

    //crear objeto de mentor con datos de req.body
    const hoja = new Hoja(req.body);
    try {
        await hoja.save();
        res.json({ mensaje : 'La hoja se agregó correctamente'});
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
        
}

//Obtener todos los mentores

exports.obtenerHojas = async (req, res, next) => {
    try {
        const hojas = await Hoja.find({});
        res.json(hojas); 
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener Mentor por su ID
exports.obtenerHoja = async (req, res, next) => {
    try {
        const hoja = await Hoja.findById(req.params.id);
        res.json(hoja);
    } catch (error) {
        console.log(erorr);
        next();
    }
}

// Actualizar registro por ID

exports.actualizarHoja = async (req, res, next) => {
    try {
        const hoja = await Hoja.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(hoja);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un mentor por su ID
exports.eliminarHoja = async(req, res, next) => {
    try {
        await Hoja.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'La hoja fue eliminada'})
    } catch (error) {
        console.log(error);
        next();
    }
}