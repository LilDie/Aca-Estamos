import React from 'react';
import './VisualizacionUsuarios.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            
            {/* Inicio tabla con la lista de usuarios registrados */}
            <main className="d-flex ">
                <div className="container-fluid mb-5 w-60 p-4 h-50">
                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="userList">Todos los usuarios</h3>
                        </div>
                        <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 containerAdmin" style={{ justifyContent: 'flex-end' }}>
                            <Link to="/Solicitudes-Usuarios-Admin" className="btn btn-lg me-2 adminButton" role="button"
                            >Nuevos usuarios
                            </Link>
                            <Link to="/Solicitudes-CV-Admin" className="btn btn-lg me-2 buttonCv" role="button">
                                Solicitudes de CV</Link>

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
