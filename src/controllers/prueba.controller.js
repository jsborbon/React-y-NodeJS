
const User = require('../models/user');
const pruebaControlador = {};

pruebaControlador.obtener = ((req, res) => {//request and response

    res.send("funcionando desde get !!!");

});

pruebaControlador.crear = (async (req, res) => {//request and response

    const { nombre, apellido, salario } = req.body

    try {

        let user = new User({ nombre, apellido, salario });

        await user.save();

        res.json({
            mensaje: 'Empleado Guardado'
        })

    } catch (err) {

        res.send(err);

    }


});

pruebaControlador.actualizar = ((req, res) => {//request and response

    res.send("funcionando desde put !!!");

});

pruebaControlador.eliminar = ((req, res) => {//request and response

    res.send("funcionando desde delete !!!");

});


module.exports = pruebaControlador;

