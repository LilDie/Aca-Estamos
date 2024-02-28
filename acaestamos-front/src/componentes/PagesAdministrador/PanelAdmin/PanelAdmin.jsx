import React from 'react';
import './PanelAdmin.css';

const PanelAdmin = () => {
  return (
    <>
      <main className="perfiladmin">
        <div className="container-fluid" style={{ borderRadius: '10px', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
          <div className="admin-row">
            <div className="admin-col1">
              <button id="btn-empresas" type="button" className="btn btn-primary btn-lg">Empresas</button>
            </div>
            <div className="admin-col2">
              <button id="btn-solicitudes" className="btn btn-primary btn-lg">Solicitudes</button>
            </div>
            <div className="admin-col3">
              <button id="btn-ofertas" className="btn btn-secondary btn-lg">Info Empresas</button>
            </div>
          </div>
        </div>
      </main>

      <main className="perfiladmin">
        <div className="container-fluid" style={{ borderRadius: '10px', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
          <div className="admin-row">
            <div className="admin-col1">
              <button id="btn-usuario" type="button" className="btn btn-primary btn-lg" style={{ backgroundColor: '#049DD9', borderColor: '#049DD9' }}>Usuarios</button>
            </div>
            <div className="admin-col2">
              <button id="btn-solicitudes" className="btn btn-primary btn-lg">Solicitudes</button>
            </div>
            <div className="admin-col3">
              <button id="btn-newcv" className="btn btn-secondary btn-lg">Nuevos CV</button>
            </div>
          </div>
        </div>
      </main>

      <main className="perfiladmin">
        <div className="container-fluid" style={{ borderRadius: '10px', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
          <div className="admin-row">
            <div className="admin-col1">
              <button id="btn-perfil" type="button" className="btn btn-primary btn-lg">Perfiles</button>
            </div>
            <div className="admin-col2">
              <button id="btn-activos" className="btn btn-primary btn-lg">Activos</button>
            </div>
            <div className="admin-col3">
              <button id="btn-inactivos" className="btn btn-secondary btn-lg">Inactivos</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PanelAdmin;
