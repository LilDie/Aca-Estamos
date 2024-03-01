import './EditPerfilEmpresa.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../../Efectos/useAlert'

const EditPerfilEmpresa = () => {

  //Definicion de constantes
  const [NombreEmpresa, setNombreEmpresa] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [RutEmpresa, setRutEmpresa] = useState('');
  const [Rubro, setRubro] = useState('');
  const [Url, setUrl] = useState('');
  const [Email, setEmail] = useState('');
  const [Ubicacion, setUbicacion] = useState('');
  const [Acercade, setAcercade] = useState('');
  const [Trayectoria, setTrayectoria] = useState('');
  const [Numeroempleados, setNumeroempleados] = useState('');
  const navigate = useNavigate();

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!NombreEmpresa || !RutEmpresa || !Telefono || !Rubro || !Email || !Ubicacion || !Url || !Acercade || !Trayectoria ||!Numeroempleados) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
    // if (Email !== Reemail) {
    //   alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
    //   hasError = false
    // }
    // if (Password !== Repassword) {
    //   alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
    //   hasError = false
    // }
    // return hasError;
  };

  const formatRut = (rut) => {
    // Formatear rut
    rut = rut.replace(/[^\dkK]/g, '');
    rut = rut.replace(/^0+/, '');

    if (rut.length > 1) {
      rut = rut.replace(/^(\d{1,2})(\d{3})(\d{3})([\dkK]{1})$/, '$1.$2.$3-$4');
    }

    return rut;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (!rutRegex.test(RutEmpresa)) {
      alertApi.show('El Rut no cumple con el formato requerido', 'error');
      return;
    }
    // Se efectua la alerta de contenido vacio o incorrecto
    if (showAlert() === true) {
      try {
        const response = await axios.post('http://localhost:3000/Crear-Empresa', {
          NombreEmpresa,
          Telefono,
          RutEmpresa,
          Rubro,
          Url,
          Email,
          Ubicacion,
          Acercade,
          Trayectoria,
          Numeroempleados
        });
        alert(JSON.stringify(response.data, null, 2));
        navigate('/Perfil-Empresa')
      } catch (error) {
        console.error('Error al enviar la solicitud:', error.response?.data || error.message);
      }
    }

  };


  return (
    <>
      <div id="Editperfilempresa" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div className="border p-4" style={{ fontFamily: 'Poppins-Regular', margin: '50px auto 50px auto', backgroundColor: '#D9F2ED', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">Editar Perfil Empresa</h2>
          <div className="form-DatosEmpresa">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="nombre-empresa" className="form-label">Nombre Empresa:</label>
                    <input type="text" className="form-control" id="nombre-empresa" placeholder="Nombre" value={NombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rut" className="form-label">Rut:</label>
                    <input type="text" className="form-control" placeholder="11.111.111-1" value={RutEmpresa} onChange={(e) => setRutEmpresa(formatRut(e.target.value))} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="giro-rubro" className="form-label">Giro o Rubro:</label>
                    <input type="text" className="form-control" placeholder="Hoteleria" value={Rubro} onChange={(e) => setRubro(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="acerca-de" className="form-label">Acerca de:</label>
                    <input type="text" className="form-control" value={Acercade} onChange={(e) => setAcercade(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="trayectoria" className="form-label">Trayectoria:</label>
                    <input type="text" className="form-control" placeholder="Trayectoria de tu empresa" value={Trayectoria} onChange={(e) => setTrayectoria(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cant-empleados" className="form-label">Cantidad de empleados:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: 200" value={Numeroempleados} onChange={(e) => setNumeroempleados(e.target.value)} />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo:</label>
                    <input type="text" className="form-control" placeholder="correo@gmail.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" placeholder="(9)12345678" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ubicacion" className="form-label">Ubicación:</label>
                    <input type="text" className="form-control" placeholder="Ej. Av. marina 000, stgo" value={Ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pagina-web" className="form-label">Página Web:</label>
                    <input type="text" className="form-control" placeholder="URL" value={Url} onChange={(e) => setUrl(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adjuntar imagen de Empresa o logotipo:</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-lg me-2">Cancelar</button>
                <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>Guardar</button>
              </div>
            </form>

            {/* Muestra la alerta si está visible */}
            {alertState.visible && (
              <div id="alertsElement" className={`alert ${alertState.type}`}>
                {alertState.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPerfilEmpresa;
