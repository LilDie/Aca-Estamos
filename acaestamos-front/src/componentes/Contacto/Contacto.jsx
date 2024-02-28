import React from 'react';

const Contacto = () => {
    return (
        <div>
            <div id="Editperfilempresa" style={{ margin: '50px auto', maxWidth: '800px' }}>
                <div className="border p-4"
                    style={{ fontFamily: 'Poppins-Regular', margin: '50px auto 50px auto', backgroundColor: '#D9F2ED', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                    <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">Contacta con Nosotros</h2>
                    <div className="form-DatosEmpresa">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Rut</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="13-333-333-k" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comenta tus dudas acá"></textarea>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-primary btn-lg">Enviar Formulario</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
