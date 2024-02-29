import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import Footer from "../componentes/Footer/Footer";
import SolicitudesUsuarios from "../componentes/PagesAdministrador/SolicitudesUsuarios/SolicitudesUsuarios";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudesUsuarios = () => {
    return (
        <>
        <NavbarAdmin />
        <FiltroAdmin />
        <SolicitudesUsuarios />
        <Footer />
        </>
    )
}

export default AdminSolicitudesUsuarios;