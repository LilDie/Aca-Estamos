import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import SolicitudesCV from "../componentes/PagesAdministrador/SolicitudesCV/SolicitudesCV";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudescv = () => {
  return (
    <>
    <NavbarAdmin />
    <FiltroAdmin />
    <SolicitudesCV />
    <Footer />
    </>
  )
}

export default AdminSolicitudescv;