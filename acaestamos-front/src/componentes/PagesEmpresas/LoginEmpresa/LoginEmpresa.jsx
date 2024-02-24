import React from 'react'
import { Link } from 'react-router-dom';
import './LoginEmpresa.css'

const LoginEmpresa = () => {
    return (
        <>
            <div className='container-fluid'>
                <main className="d-flex justify-content-center vh-100 w-100">
                    <div className="row" id="login-user">
                        <div className="col align-self-center">
                            <div className="border p-4"
                                style={{ borderRadius: '10px', backgroundColor: 'rgba(131, 166, 55, 0.15)', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                                <h2 className="text-center">Inicio de sesión Empresa</h2>
                                <div style={{ width: '600px', margin: 'auto' }} className="from-ingreso">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="correoInicioSesion" className="form-label">Ingrese email</label>
                                            <input type="email" className="form-control" id="correoInicioSesion"
                                                aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">Ingrese un Email Registrado</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contraseñaInicioSesion" className="form-label">Contraseña</label>
                                            <input type="password" className="form-control" id="contraseñaInicioSesion" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Guardar contraseña</label>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/Perfil-Empresa" type="button" className="btn btn-primary btn-lg" id="BotonInicioSesion">Ingresar</Link><br />
                                        </div>
                                        <div className="Olvide" style={{ textAlign: 'center', marginTop: '10px' }}><Link to="/OlvidoContra" className="Olvide-con" >Recuperar Contraseña</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LoginEmpresa;