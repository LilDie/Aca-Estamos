import Footer from "../componentes/Footer/Footer";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import VisualizacionUsuario from "../componentes/PagesAdministrador/VisualizacionUsuarios/VisualizacionUsuarios";

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