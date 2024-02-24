import React from 'react';
import './EditarPerfil.css'

const EditarPerfil = () => {
  return (
    <>
      <div id="Editarperfil" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div
          className="border p-4"
          style={{
            fontFamily: 'Poppins-Regular',
            backgroundColor: 'rgba(4, 157, 217, 0.15)',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderColor: 'black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
            Perfil
          </h2>
          <div className="form-Perfil" style={{ width: '80%', margin: 'auto' }}>
            <form>
              <div className="mb-3">
                <label htmlFor="cargo" className="form-label">
                  Nombre a mostrar:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoEmpleo" className="form-label">
                  Titular:
                </label>
                <input type="text" className="form-control" placeholder="Desarrollador Web / Diseñador" />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEmpresa" className="form-label">
                  Acerca de:
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Conocimientos Técnicos:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Excel Medio" />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Cursos Realizados:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Inglés II" />
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-lg me-2">
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
