const Empresa = require("../models/user-models-empresa")

const CrearEmpresa = async (req, res) => {
    const { NombreEmpresa, Telefono, RutEmpresa, Rubro, Url, Email, Password } = req.body;

    try {
        const NuevaEmpresa = await Empresa.create({
            NombreEmpresa: NombreEmpresa,
            Telefono: Telefono,
            RutEmpresa: RutEmpresa,
            Rubro: Rubro,
            Url: Url,
            Email: Email,
            Password: Password
        });
        res.status(200).json({
            code:200,
            msg: "Empresa creada con éxito",
            data: NuevaEmpresa
        });
    } catch (error) {
        console.error(error);

        if(error.code === 11000) {
            return res.status(400).json({
                code:400,
                msg: "El correo electrónico ya está en uso",
                data: null
            });
        }
        res.status(500).json({
            code: 500,
            msg:"Error interno del servidor",
            data: null
        });
    }


};


module.exports = CrearEmpresa;