import React from 'react';
import './PerfilEmpresa.css';
import { Link } from 'react-router-dom';

const PerfilEmpresa = () => {
    return (
        <>
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
