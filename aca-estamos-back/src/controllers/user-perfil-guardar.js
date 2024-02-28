const User = require("../models/user-model");
const fs = require("fs").promises;


const guardarArchivo = async (buffer, extension) => {
  const nombreArchivo = `${Date.now()}.${extension}`;
  await fs.writeFile(`./uploads/${nombreArchivo}`, buffer);
  return `uploads/${nombreArchivo}`;
};

const GuardarPerfil = async (req, res) => {
  try {
    const nuevoPerfil = {
      Nombres: req.body.Nombres,
      Apellidos: req.body.Apellidos,
      Telefono: req.body.Telefono,
      Rut: req.body.Rut,
      Correo: req.body.Correo,
      EstadoCivil: req.body.EstadoCivil,
      FechaNacimiento: req.body.FechaNacimiento,
      LinkedIn: req.body.LinkedIn,
      Disponibilidad: req.body.Disponibilidad === "on",
    };

    const ArchivoPDF1 = req?.files?.["ArchivoPDF1"]?.[0];
    if (ArchivoPDF1) {
      const buffer = ArchivoPDF1.buffer;
      const extension = ArchivoPDF1.originalname.split(".").pop();
      nuevoPerfil.ArchivoPDF1 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF2 = req?.files?.["ArchivoPDF2"]?.[0];
    if (ArchivoPDF2) {
      const buffer = ArchivoPDF2.buffer;
      const extension = ArchivoPDF2.originalname.split(".").pop();
      nuevoPerfil.ArchivoPDF2 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF3 = req?.files?.["ArchivoPDF3"]?.[0];
    if (ArchivoPDF3) {
      const buffer = ArchivoPDF3.buffer;
      const extension = ArchivoPDF3.originalname.split(".").pop();
      nuevoPerfil.ArchivoPDF3 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF4 = req?.files?.["ArchivoPDF4"]?.[0];
    if (ArchivoPDF4) {
      const buffer = ArchivoPDF4.buffer;
      const extension = ArchivoPDF4.originalname.split(".").pop();
      nuevoPerfil.ArchivoPDF4 = await guardarArchivo(buffer, extension);
    }

    const ImagenPerfil = req?.files?.["ImagenPerfil"]?.[0];
    if (ArchivoPDF4) {
      const buffer = ImagenPerfil.buffer;
      const extension = ImagenPerfil.originalname.split(".").pop();
      nuevoPerfil.ImagenPerfil = await guardarArchivo(buffer, extension);
    }

    await User.create(nuevoPerfil);
    res.status(201).json({ mensaje: "Perfil guardado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarPerfil;