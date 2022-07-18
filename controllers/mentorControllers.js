//cuando se crea un nuevo mentor

const Mentor = require('../models/Mentor');

//REACTOR PATTERN
exports.nuevoMentor = async (req, res, next ) => {
    // TODO : Insertar en la base de datos

    //crear objeto de mentor con datos de req.body
    const mentor = new Mentor(req.body);
    try {
        await mentor.save();
        res.json({ mensaje : 'El Mentor se agregó correctamente'});
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
        
}

//Obtener todos los mentores

exports.obtenerMentores = async (req, res, next) => {
    try {
        const mentores = await Mentor.find({});
        res.json(mentores); 
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener Mentor por su ID
exports.obtenerMentor = async (req, res, next) => {
    try {
        const mentor = await Mentor.findById(req.params.id);
        res.json(mentor);
    } catch (error) {
        console.log(erorr);
        next();
    }
}

// Actualizar registro por ID

exports.actualizarMentor = async (req, res, next) => {
    try {
        const mentor = await Mentor.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(mentor);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un mentor por su ID
exports.eliminarMentor = async(req, res, next) => {
    try {
        await Mentor.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El mentor fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}