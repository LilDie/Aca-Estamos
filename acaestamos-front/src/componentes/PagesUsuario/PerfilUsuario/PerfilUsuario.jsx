import React from 'react';
import './PerfilUsuario.css';
import { Link } from 'react-router-dom';

const PerfilUsuario = () => {
    return (
        <>
            <h2 className="mi-perfil"><br />Mi perfil</h2>

            <main className="perfilusuario">
                <div className="container-fluid" style={{ fontFamily: 'Poppins-Regular', backgroundColor: 'rgba(4, 157, 217, 0.15)', borderRadius: '10px' }}>
                    <div className="row-perfil">
                        <div className="col-perfil1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="col-perfil2">
                            <h3 className="Nombre-perfil">Nombre</h3>
                            <ul className="Elementos-perfil">
                                <li><a>Disponibilidad:</a></li>
                                <li><a>Correo:</a></li>
                                <li><a>LinkedIn:</a></li>
                                <li><a>Descripción del perfil:</a></li>
                            </ul>
                        </div>
                        <div className="col-perfil3">
                            <div className="actualizar-datos">
                                <p><Link to="/Actualizar-Datos-Perfil">Actualizar datos Perfil</Link></p>
                                <Link to="/Actualizar-Datos-Perfil"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="elementos-adjuntos">
                        <div className="row">
                            <div className="col">
                                <h3 style={{ marginTop: '40px' }}>Archivos Adjuntos</h3>

                                <ul className="certificadoslist">
                                    <li><a href="#">CV</a></li>
                                    <li><a href="#">Certificado de Estudios</a></li>
                                    <li><a href="#">Certificado de Antecedentes</a></li>
                                    <li><a href="#">Certificado de Cursos</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="colcv">
                                    <p><Link to="#">Mostrar CV Generado</Link></p>
                                    <Link to="#"><img src="../Img/mostrar.png" alt="Mostrar perfil icon" id="mostrar-perfil" /></Link>
                                    <p><Link to="/Actualizar-Cv">Actualizar y crear CV</Link></p>
                                    <Link to="/Actualizar-Cv"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PerfilUsuario;
