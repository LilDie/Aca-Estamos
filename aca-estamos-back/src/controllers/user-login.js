const User = require("../models/user-model");

const LoginUser = async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y Password son requeridos"
        });
    }

    try {
        const user = await User.findOne({ Email: Email });

        if (!user) {
            return res.status(400).json({
                code: 400,
                msg: "Usuario no registrado en nuestro sistema"
            });
        }

        const PasswordCorrect = (Password === user.Password);

        if (!PasswordCorrect) {
            return res.status(400).json({
                code: 400,
                msg: "Contraseña incorrecta"
            });
        }

        res.status(200).json({
            code: 200,
            msg: "Usuario logueado con éxito",
            data: {
                name: user.name,
                id: user._id
            }
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = LoginUser;
