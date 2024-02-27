import React from 'react';
import './PerfilEmpresa.css';
import { Link } from 'react-router-dom';

const PerfilEmpresa = () => {
    return (
        <>
            <div className="container-sm buscador" style={{ fontFamily: 'Poppins-Regular' }}>
                <form className="d-flex" role="search" id="buscar-ofertas">
                    <input className="form-control me-2" type="search" placeholder="Buscador..." aria-label="Buscador..." />
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

            <h2 className="mi-perfil"><br />Mi perfil Empresa</h2>

            <main className="perfilempresa">
                <div className="container-fluid" style={{ fontFamily: 'Poppins-Regular', backgroundColor: '#D9F2ED', borderRadius: '10px' }}>
                    <div className="row-perfile">
                        <div className="col-perfile1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="col-perfile2">
                            <h3 className="Nombre-perfile">Nombre Empresa</h3>
                            <ul className="Elementos-perfile">
                                <li><a>Correo:</a></li>
                                <li><a>Descripción del perfil:</a></li>
                            </ul>
                        </div>
                        <div className="col-perfile3">
                            <div className="actualizar-datos">
                                <p><Link to="/Edit-Perfil-Empresa">Actualizar datos Empresa</Link></p>
                                <Link to="/Edit-Perfil-Empresa"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="elementos-adjuntos">
                        <div className="row">
                            <div className="col">
                                <div className="colcv">
                                    <p><Link to="/Info-Empresa">Mostrar Perfil</Link></p>
                                    <Link to="/Info-Empresa"><img src="../Img/mostrar.png" alt="Mostrar perfil icon" id="mostrar-perfil" /></Link>
                                    <p><Link to="/Edit-Info-Empresa">Actualizar Perfil</Link></p>
                                    <Link to="/Edit-Info-Empresa"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PerfilEmpresa;
