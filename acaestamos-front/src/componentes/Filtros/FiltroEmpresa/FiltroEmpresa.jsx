import React, { useState } from "react"
import "./FiltroEmpresa.css"

const FiltroEmpresa = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = (event) => {
        setIsVisible(!isVisible);
        event.preventDefault();
    };

    return (
        <>

            <div className=" row buscador" style={{ fontFamily: 'Poppins-Regular' }}>
                <form className="d-flex container-fluid" role="search" id="buscar-ofertas">
                    {/* <div className='d-flex col-10 align-items-center buscadorLupa' style={{ marginRight: '0px' }}> */}
                    <div className='col-9 me-4 searchButton' >
                        <input className="form-control " type="search" placeholder="Buscador..." aria-label="Buscador..." style={{ height: '48px' }} />
                    </div>
                    <div className='col-1  divLupa'>
                        <button className="btn btn-outline-success" >
                            <i className="fa-solid fa-magnifying-glass img-fluid lupa" style={{ color: 'black', fontSize: '23px', width: '48px', height: '35px' }}></i>
                        </button>
                    </div>
                    {/* </div> */}
                    <div className='col-2 colina'>
                        <button style={{ backgroundColor: '#049DD9', width: '120px', height: '48px' }} className="btn btn-outline-light moreFiltros" type="submit" onClick={toggleVisibility}>Más filtros</button>
                    </div>
                </form>
            </div>
            {/* Termina el buscador */}

            {/* Comienzan los filtros */}
            <div style={{ display: isVisible ? 'block' : 'none' }}>
            <div className=" filtroAdmin row filtros-row" style={{ fontFamily: 'Poppins-Regular' }}>
                {/* <div className=""> */}
                <div className="col-md-2 filtros-col">
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected hidden>Disponibilidad</option>
                        <option value="1">Inmediata</option>

                    </select>
                </div>

                <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option value="" disabled selected hidden>Ordenar por</option>
                            <option value="1">Recientes</option>
                            <option value="2">Más antiguos</option>
                        </select>
                    </div>

                <div className="col-2 filtros-col">
                        <select className="form-select" aria-label="Default select example">
                            <option value="" disabled selected hidden>Modalidad</option>
                            <option value="1">Online</option>
                            <option value="2">Presencial</option>
                            <option value="3">Hibrido</option>
                        </select>
                    </div>

                <div className="col-md-2 filtros-col">
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected hidden>Rubro</option>
                        <option value="1">Administración</option>
                        <option value="2">Agropecuaria</option>
                        <option value="3">Alimenticia</option>
                        <option value="4">Arquitectura</option>
                        <option value="5">Artesanal</option>
                        <option value="6">Automotriz</option>
                        <option value="7">Banca/Financiera</option>
                        <option value="8">Bioteconología</option>
                        <option value="9">Call-Center</option>
                        <option value="10">Comercio</option>
                        <option value="11">Comercio exterior</option>
                        <option value="12">Comunicaciones</option>
                        <option value="13">Construcción</option>
                        <option value="14">Consultoría</option>
                        <option value="15">Correo</option>
                        <option value="16">Defensa</option>
                        <option value="17">Diseño</option>
                        <option value="18">Editorial</option>
                        <option value="19">Educación</option>
                        <option value="20">Energía</option>
                        <option value="21">Entretenimiento</option>
                        <option value="22">Farmacéutica</option>
                        <option value="23">Ferroviaria</option>
                        <option value="24">Financiera</option>
                        <option value="25">Gastronomía</option>
                        <option value="26">Hotelería/Turismo</option>
                        <option value="27">Imprenta</option>
                        <option value="28">Industrial</option>
                        <option value="29">Información e investigación</option>
                        <option value="30">Informática</option>
                        <option value="31">Ingeniería</option>
                        <option value="32">Inmobiliaria</option>
                        <option value="33">Internet</option>
                        <option value="34">Laboratorio</option>
                        <option value="35">Legal</option>
                        <option value="36">Logística/Transporte</option>
                        <option value="37">Manufactura</option>
                        <option value="38">Medios</option>
                        <option value="39">Publicidad</option>
                        <option value="40">Recursos Humanos</option>
                        <option value="41">Retail</option>
                        <option value="42">Salud</option>
                        <option value="43">Seguridad</option>
                        <option value="44">Seguros</option>
                        <option value="45">Servicios</option>
                        <option value="46">Tecnología</option>
                        <option value="47">Telecomunicaciones</option>
                        <option value="48">Textil</option>
                        <option value="49">Transporte</option>
                        <option value="50">Turismo</option>
                        <option value="51">Veterinaria</option>
                        <option value="52">Otros</option>
                    </select>
                </div>

                <div className="col-md-3 filtros-col">
                    <label htmlFor="customRange2" className="form-label">Años de Experiencia</label>
                    <input type="range" className="form-range" style={{ paddingBottom: '25px' }} min="0" max="20" id="customRange2" />
                </div>
                {/* </div> */}
            </div>
            <div className='container-fluid botonfiltro' style={{ alignContent: 'center' }}>
                <button className='btn btn-lg btn-primary botonFiltro' type='button'>Aplicar filtros</button>
            </div>
            </div>
        </>
    )
}

export default FiltroEmpresa;