import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import VisualizacionUsuario from "../componentes/PagesAdministrador/VisualizacionUsuarios/VisualizacionUsuarios";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin";

const AdminVisualizacion = () => {
  return (
    <>
    <NavbarAdmin />
    <FiltroAdmin />
    <VisualizacionUsuario />
    <Footer />
    </>
  )
}

export default AdminVisualizacion;