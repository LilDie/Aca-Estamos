import React from 'react';
import './Experiencia.css'

const Experiencia = () => {
    return (
        <>
            <div id="Experiencia" style={{ margin: '50px auto', maxWidth: '800px' }}>
                <div
                    className="border p-4"
                    style={{ fontFamily: 'Poppins-Regular', backgroundColor: 'rgba(4, 157, 217, 0.15)', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', }}>
                    <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
                        Experiencia Laboral
                    </h2>
                    <div style={{ width: '80%', margin: 'auto' }} className="form-Experiencia">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="cargo" className="form-label">
                                    Cargo:
                                </label>
                                <input type="text" className="form-control" id="cargo" placeholder="Ej. Ingeniero" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipoEmpleo" className="form-label">
                                    Tipo de empleo:
                                </label>
                                <input type="text" className="form-control" id="tipoEmpleo" placeholder="Part Time" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombreEmpresa" className="form-label">
                                    Nombre de la empresa:
                                </label>
                                <input type="text" className="form-control" id="nombreEmpresa" placeholder="Ej. MQQ" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaInicio" className="form-label">
                                    Fecha Inicio:
                                </label>
                                <input type="date" className="form-control" id="fechaInicio" placeholder="DD/MM/AAAA" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaFin" className="form-label">
                                    Fecha finalización:
                                </label>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="actualmenteCargo" />
                                    <label className="form-check-label" htmlFor="actualmenteCargo">
                                        Actualmente estoy en este cargo
                                    </label>
                                </div>
                                <input type="date" className="form-control" id="fechaFin" placeholder="DD/MM/AAAA" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcionCargo" className="form-label">
                                    Descripción:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="descripcionCargo"
                                    placeholder="Agrega una descripción del cargo"
                                />
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

export default Experiencia;
