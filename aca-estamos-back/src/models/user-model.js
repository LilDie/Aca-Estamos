const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Rut: String,
    FechaNacimiento: Date,
    Email: String,
    Password: String,
}, { 
    timestamps: true,
    versionKey: false
});

// Actualizar Datos Personales
userSchema.add({
  Nombres: String,
  Apellidos: String, 
  Correo: String,
  EstadoCivil: String,
  LinkedIn: String,
  Disponibilidad: {
    type: Boolean,
    default: false,
  },
  ArchivoPDF1: String,
  ArchivoPDF2: String,
  ArchivoPDF3: String,
  ArchivoPDF4: String,
  ImagenPerfil: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
