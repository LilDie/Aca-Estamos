import React, { useState } from 'react';
import { useAlert } from './useAlert';
import '../componentes/FormularioRegistro/Formularioregistro.css';

const FRRF = () => {
    const [Nombres, setNombres] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Rut, setRut] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Reco, setReco] = useState('');
    const [Fena, setFena] = useState('');
    const [Contra, setContra] = useState('');
    const [Recontra, setRecontra] = useState('');
    const [alertState, alertApi] = useAlert("alertsElement"); // Usa el hook useAlert para obtener el estado y la API de alerta

    // Función para mostrar una alerta si los campos están vacíos
    const showAlert = () => {
        if (!Nombres || !Apellidos || !Telefono || !Rut || !Correo || !Reco || !Fena || !Contra || !Recontra) {
            alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
        }
        if (Correo !== Reco) {
            alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
        }
        if (Contra !== Recontra) {
            alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
        }
    };

    // const verificar = () => {
    //     if (Correo !== Reco) {
    //         alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
    //     }
    // };
    //definicion de variable
    // const bifuncion = (event) => {
    //     showAlert();
    //     verificar();
    // };

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
                                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={Nombres} onChange={(e) => setNombres(e.target.value)} />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                                        <input type="text" className="form-control" id="apellido" placeholder="Apellido" value={Apellidos} onChange={(e) => setApellidos(e.target.value)} />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" id="telefono" placeholder="+59 999999999" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Rut</label>
                                        <input type="text" className="form-control" id="rut" placeholder="11.111.111-1" value={Rut} onChange={(e) => setRut(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="fechaNacimiento" className="form-label">Fecha Nacimiento:</label>
                                        <input type="date" className="form-control" id="fechaNacimiento" placeholder="DD/MM/AAAA" value={Fena} onChange={(e) => setFena(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Correo</label>
                                        <input type="text" className="form-control" id="correo" placeholder="example@Email.com" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Repetir Correo</label>
                                        <input type="text" className="form-control" id="repetirCorreo" placeholder="example@Email.com" value={Reco} onChange={(e) => setReco(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="contraseña" placeholder="*********" value={Contra} onChange={(e) => setContra(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Repetir Contraseña</label>
                                        <input type="password" className="form-control" id="repetircontraseña" placeholder="*********" value={Recontra} onChange={(e) => setRecontra(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>
                                <div className="row" id="contendor-registro">
                                    <button type="button" className="btn btn-primary btn-lg" id="boton-registro" onClick={showAlert}>Registrarse</button>
                                </div>
                                <div className="col">
                                    <div className="google-icon">
                                        <a href="#"><img className="img-google" src="/Img/Google.icon.jpg" alt="Google icon" /></a>
                                    </div>
                                </div>
                            </form>

                            {/* Muestra la alerta si está visible */}
                            {alertState.visible && (
                                <div id="alertsElement" className={`alert ${alertState.type}`}>
                                    {alertState.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default FRRF;