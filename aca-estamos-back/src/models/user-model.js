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

const User = mongoose.model('User', userSchema);
module.exports = User;