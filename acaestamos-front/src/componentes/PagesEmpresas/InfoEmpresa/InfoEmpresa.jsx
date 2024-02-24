import React from 'react'
import './InfoEmpresa.css'

const InfoEmpresa = () => {
    return (
        <>
            <main className="d-flex justify-content-center">
                <div className="container-fluid p-6 mb-5 rounded w-60 p-4 h-50 text-center ContainerEmp" style={{ backgroundColor: "#03a6883b" }}>
                    <div className="row justify-content-center nameEmpresa p-3" style={{ backgroundColor: "#03A688" }}>
                        <div className="col-11 colEmpresa">
                            <h1 className="nameE" style={{ color: "white", fontFamily: "Heavitas" }}>NOMBRE DE LA EMPRESA</h1>
                        </div>
                        {/* <!-- No borren este punto, es para agrandar el contenedor del nombre --> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 firstColE" style={{ backgroundColor: "#D9D9D9" }}>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">QUIENES SOMOS</h5>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam
                                    eaque, sint accusamus facere asperiores nobis, incidunt ullam quisquam sunt perferendis
                                    natus ex! Tempore tempora dolor cupiditate soluta!</p>
                            </div>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">MISIÓN</h5>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam
                                    eaque, sint accusamus facere asperiores nobis, incidunt ullam quisquam sunt perferendis
                                    natus ex! Tempore tempora dolor cupiditate soluta!</p>
                            </div>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">CONTACTO</h5>
                                </div>
                            </div>
                            <div className="contactEmp">
                                <ul>
                                    <p><i className="fa-solid fa-phone" style={{color: 'black'}}></i> +56999999999</p>
                                    <p><i className="fa-brands fa-linkedin" style={{color: 'black'}}> </i> linkedin.com/milinkedin</p> {/* <!-- arreglar esto para que los lonks largos se vean facheros --> */}
                                    <p><i className="fa-solid fa-envelope" style={{color: 'black'}}></i> correo@gmail.com</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 secondColE">
                            <div className="row container-fluid  EmpContent justify-content-center">
                                <div>
                                    <img className="imagen" src="/Img/LogoCompany.png" alt="Bootstrap" />
                                </div>
                            </div>
                            <div className="row container-fluid p-2 justify-content-center">
                                <div className="col-10">
                                    <h4 className="itemsE">UBICACIÓN</h4>
                                </div>
                                <div className="infoEmpresa">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam? Culpa quasi
                                        reprehenderit repellat sit dignissimos? Molestias tenetur non voluptatibus accusamus, veniam
                                        alias nesciunt necessitatibus vero saepe dolorum pariatur deleniti.</p>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                                {/* IMAGEN GOOGLE MAPS */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default InfoEmpresa