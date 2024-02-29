import './SolicitudesUsuarios.css';

const SolicitudesUsuarios = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevos perfiles</h1>
            </div>

            <main className="solicitudesusuarios">
                <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                    <div className="soliciu-row">
                        <div className="soliciu-col1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="soliciu-col2">
                            <h3 className="Usuario">Nombre de usuario</h3>
                            <p><a href="#">Ver perfil de usuario</a></p>
                        </div>
                        <div className="soliciu-col3">
                            <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                            <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                        </div>
                    </div>
                </div>
            </main>

            <main className="solicitudesusuarios">
                <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                    <div className="soliciu-row">
                        <div className="soliciu-col1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="soliciu-col2">
                            <h3 className="Usuario">Nombre de usuario</h3>
                            <p><a href="#">Ver perfil de usuario</a></p>
                        </div>
                        <div className="soliciu-col3">
                            <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                            <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                        </div>
                    </div>
                </div>
            </main>

            <main className="solicitudesusuarios">
                <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                    <div className="soliciu-row">
                        <div className="soliciu-col1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="soliciu-col2">
                            <h3 className="Usuario">Nombre de usuario</h3>
                            <p><a href="#">Ver perfil de usuario</a></p>
                        </div>
                        <div className="soliciu-col3">
                            <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                            <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default SolicitudesUsuarios;