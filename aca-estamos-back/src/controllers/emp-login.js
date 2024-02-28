const Empresa = require("../models/user-models-empresa");

const LoginEmpresa = async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y Password son requeridos"
        });
    }

    try {
        const empresa = await Empresa.findOne({ Email: Email });

        if (!empresa) {
            return res.status(400).json({
                code: 400,
                msg: "Empresa no registrada en nuestro sistema"
            });
        }

        
        const PasswordCorrect = (Password === empresa.Password);

        if (!PasswordCorrect) {
            return res.status(400).json({
                code: 400,
                msg: "Contraseña incorrecta"
            });
        }

        
        res.status(200).json({
            code: 200,
            msg: "Empresa logueada con éxito",
            data: {
                companyName: empresa.NombreEmpresa,
                companyId: empresa._id
 
            }
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = LoginEmpresa;
