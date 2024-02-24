import './EditPerfilEmpresa.css';

const EditPerfilEmpresa = () => {
  return (
    <>
      <div id="Editperfilempresa" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div className="border p-4" style={{ fontFamily: 'Poppins-Regular', margin: '50px auto 50px auto', backgroundColor: '#D9F2ED', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">Editar Perfil Empresa</h2>
          <div className="form-DatosEmpresa">
            <form>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="nombre-empresa" className="form-label">Nombre Empresa:</label>
                    <input type="text" className="form-control" id="nombre-empresa" placeholder="Nombre" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rut" className="form-label">Rut:</label>
                    <input type="text" className="form-control" placeholder="11.111.111-1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="giro-rubro" className="form-label">Giro o Rubro:</label>
                    <input type="text" className="form-control" placeholder="Hoteleria" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="acerca-de" className="form-label">Acerca de:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="trayectoria" className="form-label">Trayectoria:</label>
                    <input type="text" className="form-control" placeholder="Trayectoria de tu empresa" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cant-empleados" className="form-label">Cantidad de empleados:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: 200" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo:</label>
                    <input type="text" className="form-control" placeholder="correo@gmail.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" placeholder="(9)12345678" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ubicacion" className="form-label">Ubicación:</label>
                    <input type="text" className="form-control" placeholder="Ej. Av. marina 000, stgo" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pagina-web" className="form-label">Página Web:</label>
                    <input type="text" className="form-control" placeholder="URL" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adjuntar imagen de Empresa o logotipo:</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-lg me-2">Cancelar</button>
                <button type="button" className="btn btn-primary btn-lg">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPerfilEmpresa;
