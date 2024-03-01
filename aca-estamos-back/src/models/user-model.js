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
  //Actualizar perfil//
  EstadoCivil: String,
  Rubro: String,
  LinkedIn: String,
  Disponibilidad: String,
  ArchivoPDF1: String,
  ArchivoPDF2: String,
  ArchivoPDF3: String,
  ArchivoPDF4: String,
  ImagenPerfil: String,
}, { 
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;