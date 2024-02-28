import React from 'react';
import './DatosPersonales.css'

const DatosPersonales = () => {
    return (
        <>
            <form>
                <div id="Datos-personales" style={{ margin: '50px auto', maxWidth: '800px' }}>
                    <div
                        className="border p-4"
                        style={{
                            fontFamily: 'Poppins-Regular',
                            margin: '50px auto 50px auto',
                            backgroundColor: 'rgba(4, 157, 217, 0.15)',
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderColor: 'black',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
                            Datos Personales
                        </h2>
                        <div className="form-Datospersonales">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="nombres" className="form-label">
                                            Nombres:
                                        </label>
                                        <input type="text" className="form-control" id="nombres" placeholder="Nombre1 Nombre2" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">
                                            Apellidos:
                                        </label>
                                        <input type="text" className="form-control" id="apellidos" placeholder="Apellido1 Apellido2" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">
                                            Teléfono:
                                        </label>
                                        <input type="text" className="form-control" id="telefono" placeholder="(9)12345678" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rut" className="form-label">
                                            Rut:
                                        </label>
                                        <input type="text" className="form-control" id="rut" placeholder="11.111.111-1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label">
                                            Correo:
                                        </label>
                                        <input type="text" className="form-control" id="correo" placeholder="correo@gmail.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="estadoCivil" className="form-label">
                                            Estado Civil:
                                        </label>
                                        <input type="text" className="form-control" id="estadoCivil" placeholder="Ejemplo: Soltero" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fechaNacimiento" className="form-label">
                                            Fecha Nacimiento:
                                        </label>
                                        <input type="date" className="form-control" id="fechaNacimiento" placeholder="DD/MM/AAAA" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="perfilLinkedIn" className="form-label">
                                            Perfil LinkedIn:
                                        </label>
                                        <input type="text" className="form-control" id="perfilLinkedIn" placeholder="Inserte URL de su perfil" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disponibilidad" className="form-label">
                                            Disponibilidad:
                                        </label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="disponibilidad" />
                                            <label className="form-check-label" htmlFor="disponibilidad">
                                                Inmediata
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">CV PDF:</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Estudios:</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificado de Antecedentes:</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Cursos:</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Foto Perfil:</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary btn-lg me-2">
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default DatosPersonales;
