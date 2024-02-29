import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import VisualizacionEmpresas from "../componentes/PagesAdministrador/VisualizacionEmpresas/VisualizacionEmpresas";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin";

const AdminVisualizacionEmpresas = () => {
  return (
    <>
    <NavbarAdmin />
    <FiltroAdmin />
    <VisualizacionEmpresas />
    <Footer />
    </>
  )
}
export default AdminVisualizacionEmpresas;