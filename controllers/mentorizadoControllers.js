//cuando se crea un nuevo mentorizado

const Mentorizado = require('../models/Mentorizado');

exports.nuevoMentorizado = async (req, res, next ) => {
    // TODO : Insertar en la base de datos

    //crear objeto de mentor con datos de req.body
    const mentorizado = new Mentorizado(req.body);
    try {
        await mentorizado.save();
        res.json({ mensaje : 'El Mentorizado se agregó correctamente'});
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
        
}

//Obtener todos los mentores

exports.obtenerMentorizados = async (req, res, next) => {
    try {
        const Mentorizados = await Mentorizado.find({});
        res.json(Mentorizados); 
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener Mentorizado por su ID
exports.obtenerMentorizado = async (req, res, next) => {
    try {
        const mentorizado = await Mentorizado.findById(req.params.id);
        res.json(mentorizado);
    } catch (error) {
        console.log(erorr);
        next();
    }
}

// Actualizar registro por ID

exports.actualizarMentorizado = async (req, res, next) => {
    try {
        const mentorizado = await Mentorizado.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(mentorizado);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un mentor por su ID
exports.eliminarMentorizado = async(req, res, next) => {
    try {
        await Mentorizado.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El mentorizado fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}