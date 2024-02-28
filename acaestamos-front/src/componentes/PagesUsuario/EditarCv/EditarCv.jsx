import React from 'react'
import './EditarCv.css'
import { Link } from 'react-router-dom'

const EditarCv = () => {
  return (
    <>
    <main className="d-flex justify-content-center">
    <div className="  rounded w-60 p-4 h-50 text-center cvContainer" style={{ backgroundColor: "#049dd963" }}>
        <div className="row justify-content-center nameUsuario p-3" style={{ backgroundColor: "#0077B7" }}>
            <div className="col-11 colName">
                <h1 className="nameCv" style={{ color: "white", fontFamily: "Heavitas" }}>Nombre de la persona</h1>
                <h3 className="nameCv" style={{ color: "white" }}>Profesión</h3>
            </div>
            <div className="col-1 colName">
            <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
            </div>
            {/* <!-- No borren este punto, es para agrandar el contenedor del nombre --> */}
        </div>
        <div className="row justify-content-center">
            <div className="col-5 firstColCv" style={{ backgroundColor: "#D9D9D9" }}>
                <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                    <div className="col-10">
                        <h5 className="itemsCv">MI PERFIL</h5>
                    </div>
                    <div className="col-1">
                    <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                    </div>
                </div>
                <div className="contInfo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam
                        eaque, sint accusamus facere asperiores nobis, incidunt ullam quisquam sunt perferendis
                        natus ex! Tempore tempora dolor cupiditate soluta!</p>
                    <a href="#" style={{ color: "black" }}><u> Cert. antecedentes</u></a>
                </div>
                <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                    <div className="col-10">
                        <h5 className="itemsCv">CONOCIMIENTOS TÉCNICOS</h5>
                    </div>
                    <div className="col-1">
                    <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                    </div>
                </div>
                <div className="row justify-content-center contInfo">
                    <div className="col-6 contInfo">
                        <ul className="cTecnics">
                            <li>Python</li>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="col-6 row">
                        <ul className="cursosUsuario">
                            <h6 className="contInfo"><b>Certificados</b></h6>
                            <li>Jira</li>
                            <li>SCRUM</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                        </ul>
                        <a href="#" style={{ color: "black" }}><u> Cert. cursos</u></a>
                    </div>
                </div>
                <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                    <div className="col-10">
                        <h5 className="itemsCv">CONTACTO</h5>
                    </div>
                    <div className="col-1">
                    <Link to="/Actualizar-Datos-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                    </div>
                </div>
                <div className="contactData">
                    <ul>
                        <p><i className="fa-solid fa-phone" style={{color: 'black'}}></i> +56999999999</p>
                        <p><i className="fa-brands fa-linkedin" style={{color: 'black'}}> </i> linkedin.com/milinkedin</p> {/* <!-- arreglar esto para que los lonks largos se vean facheros --> */}
                        <p><i className="fa-solid fa-envelope" style={{color: 'black'}}></i> correo@gmail.com</p>
                    </ul>
                </div>
            </div>
            <div className="col-6 secondColCv">
                <div className="row container-fluid  cvContent justify-content-center">
                    <div className="col-10">
                        <h4 className="itemsCv p-2">EXPERIENCIA</h4>
                    </div>
                    <div className="col-1">
                    <Link to="/Actualizar-Experiencia"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                    </div>
                    <div className="contInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam? Culpa quasi
                            reprehenderit repellat sit dignissimos? Molestias tenetur non voluptatibus accusamus, veniam
                            alias nesciunt necessitatibus vero saepe dolorum pariatur deleniti.</p>
                    </div>
                </div>
                <div className="row container-fluid p-2 justify-content-center">
                    <div className="col-10">
                        <h4 className="itemsCv">EDUCACIÓN</h4>
                    </div>
                    <div className="col-1">
                    <Link to="/Actualizar-Educacion"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                    </div>
                    <div className="contInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam? Culpa quasi
                            reprehenderit repellat sit dignissimos? Molestias tenetur non voluptatibus accusamus, veniam
                            alias nesciunt necessitatibus vero saepe dolorum pariatur deleniti.</p>
                    </div>
                </div>
                <div className="container-fluid contInfo">
                    <a href="#" style={{ color: "black" }}><u> Cert. de estudios PDF</u></a>
                </div>
            </div>
        </div>
    </div>
</main>

    </>
  )
}

export default EditarCv