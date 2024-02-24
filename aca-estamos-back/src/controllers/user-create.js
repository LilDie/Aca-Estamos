const User = require("../models/user-model");

const CrearUsuario = async (req, res) => {
    const { Nombre, Apellido, Telefono, Rut, FechaNacimiento, Email, Password } = req.body;

    try {
            const nuevoUsuario = await User.create({
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Rut: Rut,
            FechaNacimiento: FechaNacimiento,
            Email: Email,
            Password: Password
        });

        res.status(200).json({
            code: 200,
            msg: "Usuario creado con éxito",
            data: nuevoUsuario
        });
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            return res.status(400).json({
                code: 400,
                msg: "El correo electrónico ya está en uso",
                data: null
            });
        }
        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor",
            data: null
        });
    }
};

module.exports = CrearUsuario;
