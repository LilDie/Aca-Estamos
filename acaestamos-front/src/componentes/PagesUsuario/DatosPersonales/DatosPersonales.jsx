import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DatosPersonales.css';
import axios from 'axios';

const DatosPersonales = () => {
    const [Nombres, setNombres] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Rut, setRut] = useState('');
    const [Correo, setCorreo] = useState('');
    const [EstadoCivil, setEstadoCivil] = useState('');
    const [FechaNacimiento, setFechaNacimiento] = useState('');
    const [LinkedIn, setLinkedIn] = useState('');
    const [Disponibilidad, setDisponibilidad] = useState(false);
    const [ArchivoPDF1, setArchivoPDF1] = useState(null);
    const [ArchivoPDF2, setArchivoPDF2] = useState(null);
    const [ArchivoPDF3, setArchivoPDF3] = useState(null);
    const [ArchivoPDF4, setArchivoPDF4] = useState(null);
    const [ImagenPerfil, setImagenPerfil] = useState(null);
    const navigate = useNavigate();

    const handleArchivoPDF1Change = (e) => {
        setArchivoPDF1(e.target.files[0]);
    };

    const handleArchivoPDF2Change = (e) => {
        setArchivoPDF2(e.target.files[0]);
    };

    const handleArchivoPDF3Change = (e) => {
        setArchivoPDF3(e.target.files[0]);
    };

    const handleArchivoPDF4Change = (e) => {
        setArchivoPDF4(e.target.files[0]);
    };

    const handleImagenPerfilChange = (e) => {
        setImagenPerfil(e.target.files[0]);
    };

    const GuardarPerfil = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('Nombres', Nombres);
            formData.append('Apellidos', Apellidos);
            formData.append('Telefono', Telefono);
            formData.append('Rut', Rut);
            formData.append('Correo', Correo);
            formData.append('EstadoCivil', EstadoCivil);
            formData.append('FechaNacimiento', FechaNacimiento);
            formData.append('LinkedIn', LinkedIn);
            formData.append('Disponibilidad', Disponibilidad ? 'Inmediata' : 'No Inmediata');
            formData.append('ArchivoPDF1', ArchivoPDF1);
            formData.append('ArchivoPDF2', ArchivoPDF2);
            formData.append('ArchivoPDF3', ArchivoPDF3);
            formData.append('ArchivoPDF4', ArchivoPDF4);
            formData.append('ImagenPerfil', ImagenPerfil);

            const response = await axios.post('http://localhost:3000/Guardar-Perfil', formData);

            console.log(response.data);
            navigate('/Perfil-Usuario');
        } catch (error) {
            console.error('Error al guardar el perfil:', error);
        }
    };


    return (
        <>
            <form onSubmit={GuardarPerfil} encType="multipart/form-data">
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
                                        <input type="text" className="form-control" id="nombres" placeholder="Nombre1 Nombre2" value={Nombres} onChange={(e) => setNombres(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">
                                            Apellidos:
                                        </label>
                                        <input type="text" className="form-control" id="apellidos" placeholder="Apellido1 Apellido2" value={Apellidos} onChange={(e) => setApellidos(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">
                                            Teléfono:
                                        </label>
                                        <input type="text" className="form-control" id="telefono" placeholder="(9)12345678" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rut" className="form-label">
                                            Rut:
                                        </label>
                                        <input type="text" className="form-control" id="rut" placeholder="11.111.111-1" value={Rut} onChange={(e) => setRut(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label">
                                            Correo:
                                        </label>
                                        <input type="text" className="form-control" id="correo" placeholder="correo@gmail.com" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="estadoCivil" className="form-label">
                                            Estado Civil:
                                        </label>
                                        <input type="text" className="form-control" id="estadoCivil" placeholder="Ejemplo: Soltero" value={EstadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fechaNacimiento" className="form-label">
                                            Fecha Nacimiento:
                                        </label>
                                        <input type="date" className="form-control" id="fechaNacimiento" placeholder="DD/MM/AAAA" value={FechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="perfilLinkedIn" className="form-label">
                                            Perfil LinkedIn:
                                        </label>
                                        <input type="text" className="form-control" id="perfilLinkedIn" placeholder="Inserte URL de su perfil" value={LinkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disponibilidad" className="form-label">
                                            Disponibilidad:
                                        </label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="disponibilidad" checked={Disponibilidad}
                                                onChange={(e) => setDisponibilidad(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="disponibilidad" >
                                                Inmediata
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">CV PDF:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF1" accept=".pdf" onChange={handleArchivoPDF1Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Estudios:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF2" accept=".pdf" onChange={handleArchivoPDF2Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificado de Antecedentes:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF3" accept=".pdf" onChange={handleArchivoPDF3Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Cursos:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF4" accept=".pdf" onChange={handleArchivoPDF4Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Foto Perfil:</label>
                                        <input className="form-control" type="file" name="ImagenPerfil" accept="image/png, image/jpeg" onChange={handleImagenPerfilChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="/Perfil-Usuario" type="button" className="btn btn-secondary btn-lg me-2">
                                    Cancelar
                                </Link>
                                <button type="submit" className="btn btn-primary btn-lg">
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
