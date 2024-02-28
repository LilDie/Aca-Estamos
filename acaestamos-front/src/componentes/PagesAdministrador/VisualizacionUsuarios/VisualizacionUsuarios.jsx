import React from 'react';
import './VisualizacionUsuarios.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VisualizacionUsuarios = () => {
    const [records, setRecords] = useState([]);
    const navegate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3000/Usuario')
            .then(res => {
                setRecords(res.data.data);
                console.log(res);

            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);



    return (
        <>
            <div className="container-sm buscador" style={{ fontFamily: 'Poppins-Regular' }}>
                <form className="d-flex" role="search" id="buscar-ofertas">
                    <input className="form-control me-2" type="search" placeholder="Buscar Ofertas.." aria-label="Buscar Ofertas..." />
                    <button className="btn btn-outline-success" type="submit">
                        <img src="../Img/Lupa.png" alt="Descripción de la imagen" className="img-fluid" />
                    </button>
                    <button style={{ backgroundColor: '#049DD9', width: '120px' }} className="btn btn-outline-light" type="submit">Más filtros</button>
                </form>
            </div>
            {/* Termina el buscador */}
            {/* Comienzan los filtros */}
            <div className="container-fluid filtroAdmin" style={{ fontFamily: 'Poppins-Regular' }}>
                <div className="row filtros-row">
                    <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Área Laboral</option>
                            <option value="1">Logística</option>
                            <option value="2">Seguridad</option>
                            <option value="3">Programación</option>
                        </select>
                    </div>
                    <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Jornada</option>
                            <option value="1">Mañana</option>
                            <option value="2">Tarde</option>
                            <option value="3">Noche</option>
                        </select>
                    </div>
                    <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Modalidad</option>
                            <option value="1">Online</option>
                            <option value="2">Presencial</option>
                            <option value="3">Hibrido</option>
                        </select>
                    </div>
                    <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-3 filtros-col">
                        <label htmlFor="customRange2" className="form-label">Años de Experiencia</label>
                        <input type="range" className="form-range" style={{ paddingBottom: '25px' }} min="0" max="20" id="customRange2" />
                    </div>
                </div>
            </div>
            {/* Terminan los filtros */}

            {/* Inicio tabla con la lista de usuarios registrados */}
            <main className="d-flex ">
                <div className="container-fluid mb-5 w-60 p-4 h-50">
                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="userList">Todos los usuarios</h3>
                        </div>
                        <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 containerAdmin" style={{ justifyContent: 'flex-end' }}>
                            <button className="btn btn-lg me-2 adminButton" type="button"
                                Link>Nuevos usuarios
                            </button>
                            <button className="btn btn-lg me-2 buttonCv" type="button"
                                href="#">Solicitudes de CV
                            </button>
                        </div>
                    </div>
                    <div className="conteiner fluid">
                        <div className="table-responsive">
                            <table className="table table-bordered">

                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Rut</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map((record, index) => (
                                            <tr key={index}>
                                                <td>{record.Nombre}</td>
                                                <td>{record.Apellido}</td>
                                                <td>{record.Rut}</td>
                                                <td>{record.Email}</td>
                                                <td className='Botones-tablero'>
                                                    <button id='Editar-Boton' className="btn btn-success" type="button">Editar</button>
                                                </td>
                                                <td>
                                                    <button onClick= {e => handleSumbit(record._id)} id='Eliminar-boton' className="btn btn-danger" type="button">Eliminar</button>
                                            </td>
                                            </tr>
                                ))
                                    }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </main >
        </>
    );
function handleSumbit(_id) {
    const conf = window.confirm('Seguro que quieres Elimnar a este Usuario?')

    if (conf) {
        axios.delete(`http://localhost:3000/Borrar-Usuario/`+_id)
            .then(res => {
                alert('Usuario Eliminado');
                window.location.reload();
                console.log(res);
            })
            .catch(err => {
                console.error('Error deleting data:', err);
            });
    }

}
};

export default VisualizacionUsuarios
