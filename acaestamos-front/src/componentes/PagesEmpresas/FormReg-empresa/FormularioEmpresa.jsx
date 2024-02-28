import React, { useState } from 'react'
import './FormularioEmpresa.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../../Efectos/useAlert';

const FormularioEmpresa = () => {

  //Definicion de constantes
  const [Nombre, setNombre] = useState('')
  const [Rutem, setRutem] = useState('')
  const [Telem, setTelem] = useState('')
  const [Rubro, setRubro] = useState('')
  const [Correo, setCorreo] = useState('')
  const [Reco, setReco] = useState('')
  const [Url, setUrl] = useState('')
  const [Contra, setContra] = useState('')
  const [Recontra, setRecontra] = useState('')
  const navigate = useNavigate();

  // Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  // Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!Nombre || !Rutem || !Telem || !Rubro || !Correo || !Reco || !Url || !Contra || !Recontra) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
    if (Correo !== Reco) {
      alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
      hasError = false
    }
    if (Contra !== Recontra) {
      alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
      hasError = false
    }
    return hasError;
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

    // Validación del RUT
    const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (!rutRegex.test(Rut)) {
      alertApi.show('El Rut no cumple con el formato requerido','error');
      return;
    }
    // Se efectua la alerta de contenido vacio o incorrecto
    if (showAlert() === true) {
      try {
        const response = await axios.post('http://localhost:3000/Crear-usuario', {
          Nombre,
          Apellido,
          Telefono,
          Rut,
          Fechanacimiento,
          Email,
          Password,
        });

        alert(JSON.stringify(response.data, null, 2));
        navigate('/Login-form')
      } catch (error) {
        console.error('Error al enviar la solicitud:', error.response?.data || error.message);
      }
    }

  };


  return (
    <>
    <main className="d-flex justify-content-center">
      <div style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div className="border p-4"
          style={{ margin: '50px auto', backgroundColor: 'rgba(131, 166, 55, 0.15)', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <h2 className="text-center">Datos Registro</h2>
          <div className="from-Registro">
            <form>
              <div className="row">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre Empresa</label>
                    <input type="text" className="form-control" id="validationCustom01"
                      placeholder="Nombre Empresa" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Rut Empresa</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="11.111.111-1" value={Rutem} onChange={(e) => setRutem(e.target.value)} />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="+59 999999999" value={Telem} onChange={(e) => setTelem(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Rubro</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="Hoteleria, Consultoria, ect..." value={Rubro} onChange={(e) => setRubro(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="example@Email.com" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Correo</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="example@Email.com" value={Reco} onChange={(e) => setReco(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Url de Página web</label>
                    <input type="text" className="form-control" id="validationCustom02"
                      placeholder="Url" value={Url} onChange={(e) => setUrl(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="*********" value={Contra} onChange={(e) => setContra(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Contraseña</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="*********" value={Recontra} onChange={(e) => setRecontra(e.target.value)} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="contendor-registro">
                <button type="button" className="btn btn-primary btn-lg" id="boton-registro">Registrarse</button>
              </div>
              <div className="row">
                <div className="col">
                  <div className="google-icon">
                    <a href="/"><img className="img-google" src="/Img/Google.icon.jpg" alt="Google Icon" /></a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
        </>
  )
}

export default FormularioEmpresa