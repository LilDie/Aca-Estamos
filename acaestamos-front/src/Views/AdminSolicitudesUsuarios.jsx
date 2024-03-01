import LayoutAdmin from "../Layout/LayoutAdmin"
import SolicitudesUsuarios from "../componentes/PagesAdministrador/SolicitudesUsuarios/SolicitudesUsuarios";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudesUsuarios = () => {
    return (
        <LayoutAdmin>
            <FiltroAdmin />
            <SolicitudesUsuarios />
        </LayoutAdmin>
    )
}

export default AdminSolicitudesUsuarios;