import Footer from "../componentes/Footer/Footer";
import Header from "../componentes/Header/Header";
import Navbar from "../componentes/Navbar/Navbar";
import InfoEmpresa from "../componentes/PagesEmpresas/InfoEmpresa/InfoEmpresa";
import EditInfoEmpresa from "../componentes/PagesEmpresas/EditInfoEmpresa/EditInfoEmpresa";
import EditarCv from "../componentes/PagesUsuario/EditarCv/EditarCv"
import FormularioRegistro from "../componentes/FormularioRegistro/Formularioregistro"
import NavbarLogin from '../componentes/NavbarLogin/NavbarLogin'

const TestCaro = () => {
    return (
      <>
      <Header />
      <Navbar />
      {/* <NavbarLogin /> */}
      {/* <EditarCv /> */}
      {/* <InfoEmpresa /> */}
      {/* <EditInfoEmpresa /> */}
      <FormularioRegistro />
      <Footer />
      </>
    )
  }
  
  export default TestCaro;