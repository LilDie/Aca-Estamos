import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DatosPersonales.css';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';


const DatosPersonales = () => {
    const [perfil, setPerfil] = useState(null);
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [EstadoCivil, setEstadoCivil] = useState('');
    const [LinkedIn, setLinkedIn] = useState('');
    const [Rubro, setRubro] = useState('');
    const [Disponibilidad, setDisponibilidad] = useState(false);
    const [ArchivoPDF1, setArchivoPDF1] = useState(null);
    const [ArchivoPDF2, setArchivoPDF2] = useState(null);
    const [ArchivoPDF3, setArchivoPDF3] = useState(null);
    const [ArchivoPDF4, setArchivoPDF4] = useState(null);
    const [ImagenPerfil, setImagenPerfil] = useState(null);

    useEffect(() => {
        const obtenerPerfil = async () => {
            try {

                const response = await client.get(`/Obtener-Perfil/${getUserId()}`) 
                setPerfil(response?.data);

                if(response?.data?.Nombre) setNombre(response?.data?.Nombre);
                if(response?.data?.Apellido) setApellido(response?.data?.Apellido);
                if(response?.data?.Telefono) setTelefono(response?.data?.Telefono);
                if(response?.data?.EstadoCivil) setEstadoCivil(response?.data?.EstadoCivil);
                if(response?.data?.LinkedIn) setLinkedIn(response?.data?.LinkedIn);
                if(response?.data?.Rubro) setRubro(response?.data?.Rubro);
                if(response?.data?.Disponibilidad) setDisponibilidad(response?.data?.Disponibilidad);
                if(response?.data?.ArchivoPDF1) setArchivoPDF1(response?.data?.ArchivoPDF1);
                if(response?.data?.ArchivoPDF2) setArchivoPDF2(response?.data?.ArchivoPDF2);
                if(response?.data?.ArchivoPDF3) setArchivoPDF3(response?.data?.ArchivoPDF3);
                if(response?.data?.ArchivoPDF4) setArchivoPDF4(response?.data?.ArchivoPDF4);
                if(response?.data?.ImagenPerfil) setImagenPerfil(response?.data?.ImagenPerfil);

                
            } catch (error) {
                if (error.response) {
                    console.error('Error en la respuesta:', error.response.data);
                } else if (error.request) {
                    console.error('Error en la solicitud:', error.request);
                } else {
                    console.error('Error general:', error.message);
                }
            }
        };

        obtenerPerfil();
    }, []);

    
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
            formData.append('Nombre', Nombre);
            formData.append('Apellido', Apellido);
            formData.append('Telefono', Telefono);
            formData.append('EstadoCivil', EstadoCivil);
            formData.append('Rubro', Rubro);
            formData.append('Disponibilidad', Disponibilidad ? 'Inmediata' : 'No Inmediata');
            formData.append('LinkedIn', LinkedIn);
            formData.append('ArchivoPDF1', ArchivoPDF1);
            formData.append('ArchivoPDF2', ArchivoPDF2);
            formData.append('ArchivoPDF3', ArchivoPDF3);
            formData.append('ArchivoPDF4', ArchivoPDF4);
            formData.append('ImagenPerfil', ImagenPerfil);

            const userId = getUserId();
            const response = await client.post(`http://localhost:3000/Guardar-Perfil/${userId}`, formData);

            console.log(response.data);
            navigate('/Perfil-Usuario')
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
                                            Nombre:
                                        </label>
                                        <input type="text" className="form-control" id="nombres" defaultValue={perfil && perfil.Nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">
                                            Apellido:
                                        </label>
                                        <input type="text" className="form-control" id="apellidos" defaultValue={perfil && perfil.Apellido} onChange={(e) => setApellido(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">
                                            Teléfono:
                                        </label>
                                        <input type="text" className="form-control" id="telefono" defaultValue={perfil && perfil.Telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="estadoCivil" className="form-label">
                                            Estado Civil:
                                        </label>
                                        <input type="text" className="form-control" id="estadoCivil" placeholder="Ejemplo: Soltero" defaultValue={perfil && perfil.EstadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Descripcion" className="form-label">
                                            Rubro de interes:
                                        </label>
                                        <input type="text" className="form-control" id="Acerca de" placeholder="Rubro al cual desea emplearse" defaultValue={perfil && perfil.Rubro} onChange={(e) => setRubro(e.target.value)} />
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
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="perfilLinkedIn" className="form-label">
                                            Perfil LinkedIn:
                                        </label>
                                        <input type="text" className="form-control" id="perfilLinkedIn" placeholder="Inserte URL de su perfil" defaultValue={perfil && perfil.LinkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
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
