import React from 'react'
import './VisualizacionUsuarios.css'
import { Link } from 'react-router-dom';

const VisualizacionUsuarios = () => {
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='tabla' scope="col">Nombre</th>
                                <th className='tabla' scope="col">Apellido paterno</th>
                                <th className='tabla' scope="col">Apellido Materno</th>
                                <th className='tabla' scope="col">Actividad</th>
                                <th className='tabla' scope="col">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row" className="userName">Mark</th>
                                <td className="userName">Loki</td>
                                <td className="userName">Otto</td>
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{ color: 'black' }}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Mark</th>
                                <td className="userName">Loki</td>
                                <td className="userName">Otto</td>
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{ color: 'black' }}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Mark</th>
                                <td className="userName">Loki</td>
                                <td className="userName">Otto</td>
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{ color: 'black' }}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Mark</th>
                                <td className="userName">Loki</td>
                                <td className="userName">Otto</td>
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{ color: 'black' }}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Mark</th>
                                <td className="userName">Loki</td>
                                <td className="userName">Otto</td>
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#FF3B47' }}
                                        href="#">Inactivo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{ color: 'black' }}></i></a> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default VisualizacionUsuarios