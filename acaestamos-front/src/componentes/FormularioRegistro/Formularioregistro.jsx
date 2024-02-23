import React, { useState } from 'react';
import './Formularioregistro';
// import CrearUsuario from '../../../../aca-estamos-back/src/controllers/user-create';
//import axios from 'axios';

 const Formularioregistro = () => {

//   function agregarUsuario() {

//   const [Nombre, setNombre]=useState('');
//   const [Apellido, setApellido]=useState('');
//   const [Telefono, setTelefono]=useState('');
//   const [Rut, setRut]=useState('');
//   const [Fechanacimiento, setFechanacimiento]=useState('');
//   const [Email, setEmail]=useState('');
//   const [Password, setPassword]=useState('');

//   CrearUsuario.nuevoUsuario();

//   //axios.post('http://localhost:3000/crear-usuario', CrearUsuario.nuevoUsuario)
//   .then(res => {
//     alert(res.data)
//   })
//   .then(err => {console.log(err)})
// }

    return (
    <>
      <main className="d-flex justify-content-center">
        <div style={{ margin: '50px auto', maxWidth: '800px' }}>
          <div
            className="border p-4"
            style={{
              margin: '50px auto',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderColor: 'black',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h2 className="text-center">Datos Registro</h2>
            <div className="form-Registro">
              <form id="registroForm">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" required minlength="2" value={Nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Apellido" required minlength="3" value={Apellido} onChange={(e) => setApellido(e.target.value)}/>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="telefono" placeholder="+59 999999999" required  minlength="3"value={Telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Rut</label>
                    <input type="text" className="form-control" id="rut" placeholder="11.111.111-1" value={Rut} onChange={(e) => setRut(e.target.value)}/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fechaNacimiento" className="form-label">Fecha Nacimiento:</label>
                    <input type="date" className="form-control" id="fechaNacimiento" placeholder="DD/MM/AAAA" required value={Fechanacimiento} onChange={(e) => setFechanacimiento(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="correo" placeholder="example@Email.com"required minlength="3" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Correo</label>
                    <input type="text" className="form-control" id="repetirCorreo" placeholder="example@Email.com" required  minlength="3"/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseña" placeholder="*********" required minlength="3" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Contraseña</label>
                    <input type="password" className="form-control" id="repetircontraseña" placeholder="*********" required minlength="3" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
                <div className="row" id="contendor-registro">
                  <button onClick={agregarUsuario} type="submit" className="btn btn-primary btn-lg" id="boton-registro">Registrarse</button>
                </div>
                <div className="col">
                  <div className="google-icon">
                    <a href="#"><img className="img-google" src="/Img/Google.icon.jpg" alt="Google icon" /></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default Formularioregistro;