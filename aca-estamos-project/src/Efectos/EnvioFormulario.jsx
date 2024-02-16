import React from 'react';
import { useAlert } from './useAlert'; // Importa el hook useAlert

function EnForm() {
    const [alertState, alertApi] = useAlert("alertsElement"); // Usa el hook useAlert para obtener el estado y la API de alerta

    // Función para mostrar una alerta
    const showAlert = () => {
        alertApi.show("¡No llenaste correctamente los datos solicitados!");
    };

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {/* Modifica el botón para llamar a la función showAlert */}
                <button type="button" className="btn btn-primary" onClick={showAlert}>Submit</button>
            </form>

            {/* Muestra la alerta si está visible */}
            {alertState.visible && (
                <div id="alertsElement" className={`alert ${alertState.type}`}>
                    {alertState.message}
                </div>
            )}
        </>
    )
}
export default EnForm;
