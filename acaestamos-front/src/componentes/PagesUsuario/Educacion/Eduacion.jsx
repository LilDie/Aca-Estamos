import React from 'react';
import './Educacion.css';

const Educacion = () => {
  return (
    <>
      <div id="Educacion" style={{ margin: '50px auto', maxWidth: '800px' }}>
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
            Educación
          </h2>
          <div style={{ width: '80%', margin: 'auto' }} className="form-Educacion">
            <form>
              <div className="mb-3">
                <label htmlFor="nivelEducacional" className="form-label">
                  Nivel educacional:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Universitario completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="institucionEducativa" className="form-label">
                  Institución Educativa:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Universidad Austral" />
              </div>
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título:
                </label>
                <input type="text" className="form-control" placeholder="Ej. MQQ" />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaInicio" className="form-label">
                  Fecha Inicio:
                </label>
                <input type="date" className="form-control" placeholder="DD/MM/AAAA" />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaFin" className="form-label">
                  Fecha finalización:
                </label>
                <input type="date" className="form-control" placeholder="DD/MM/AAAA" />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Descripción:
                </label>
                <input type="text" className="form-control" placeholder="Agrega una descripción de la carrera" />
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

export default Educacion;
