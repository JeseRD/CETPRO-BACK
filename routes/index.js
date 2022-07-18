const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorControllers');
const mentorizadoController = require('../controllers/mentorizadoControllers');
const hojaController = require('../controllers/hojaControllers');

module.exports = function(){
    
    //Agrega nuevos Mentor via POST
    router.post('/Mentor', 
        mentorController.nuevoMentor
    );

    //Obtener Registros
    router.get('/Mentores',
        mentorController.obtenerMentores
    );

    //Obtener mentor por su ID
    router.get('/Mentor/:id',
        mentorController.obtenerMentor
    );

    // Actualizar registro
    router.put('/Mentor/:id',
        mentorController.actualizarMentor
    );

    //Eliminar registro
    router.delete('/Mentor/:id',
        mentorController.eliminarMentor
    );

    //Agrega nuevos Mentorizado via POST
    router.post('/Mentorizado', 
        mentorizadoController.nuevoMentorizado
    );

    //Obtener Registros
    router.get('/Mentorizados',
        mentorizadoController.obtenerMentorizados
    );


    //Obtener mentorizado por su ID
    router.get('/Mentorizado/:id',
        mentorizadoController.obtenerMentorizado
    );

    // Actualizar registro
    router.put('/Mentorizado/:id',
        mentorizadoController.actualizarMentorizado
    );

    //Eliminar mentorizado
    router.delete('/Mentorizado/:id',
        mentorizadoController.eliminarMentorizado
    );

    //Agrega nueva hoja via POST
    router.post('/Hoja', 
        hojaController.nuevaHoja
    );

    //Obtener Registros
    router.get('/Hojas',
        hojaController.obtenerHojas
    );

    //Obtener hoja por su ID
    router.get('/Hoja/:id',
        hojaController.obtenerHoja
    );

    // Actualizar registro
    router.put('/Hoja/:id',
        hojaController.actualizarHoja
    );

    //Eliminar registro
    router.delete('/Hoja/:id',
        hojaController.eliminarHoja
    );

    return router;
}