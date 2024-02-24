import React from 'react'
import './VisualizacionEmpresas.css'

const VisualizacionEmpresas = () => {
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
                            <option selected>Ordenar por</option>
                            <option value="1">Recientes</option>
                            <option value="2">Más antiguos</option>
                            {/* <option value="3">Three</option> */}
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
                            <h3 className="userList">Todas las empresas</h3>
                        </div>
                        <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 containerAdmin" style={{ justifyContent: 'flex-end' }}>
                        
                            <button className="btn btn-lg me-2 buttonCv" type="button" 
                                href="#">Solicitudes de Empresas
                            </button>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='tabla' scope="col">Nombre Empresa</th>
                                <th className='tabla' scope="col">RUT</th>
                                {/* <th className='tabla' scope="col">Apellido Materno</th> */}
                                <th className='tabla' scope="col">Actividad</th>
                                <th className='tabla' scope="col">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row" className="userName">Empresa 1</th>
                                <td className="userName">77.553.234-1</td>
                                {/* <td className="userName">Otto</td> */}
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{color:'black'}}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Empresa 1</th>
                                <td className="userName">77.553.234-1</td>
                                {/* <td className="userName">Otto</td> */}
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{color:'black'}}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Empresa 1</th>
                                <td className="userName">77.553.234-1</td>
                                {/* <td className="userName">Otto</td> */}
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{color:'black'}}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Empresa 1</th>
                                <td className="userName">77.553.234-1</td>
                                {/* <td className="userName">Otto</td> */}
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{color:'black'}}></i></a> </td>
                            </tr>
                            <tr>
                                <th scope="row" className="userName">Empresa 1</th>
                                <td className="userName">77.553.234-1</td>
                                {/* <td className="userName">Otto</td> */}
                                <td className="">
                                    <button className="btn btn-sm me-2 botonActividad" type="button" style={{ backgroundColor: '#109CF1' }}
                                        href="#">Activo
                                    </button>
                                </td>
                                <td><a href="/pages/Editarperfil.html"><i className="fa-solid fa-pen-to-square fa-xl iconAdmin" style={{color:'black'}}></i></a> </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default VisualizacionEmpresas