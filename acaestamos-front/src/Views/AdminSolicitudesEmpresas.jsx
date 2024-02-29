import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin"
import Footer from "../componentes/Footer/Footer"
import SolicitudesEmpresas from "../componentes/PagesAdministrador/SolicitudesEmpresas/SolicitudesEmpresas"
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudesEmpresas = () => {
  return (
    <>
        <NavbarAdmin />
        <FiltroAdmin />
        <SolicitudesEmpresas />
        <Footer />

    </>
  )
}

export default AdminSolicitudesEmpresas;