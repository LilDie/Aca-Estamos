import LayoutAdmin from "../Layout/LayoutAdmin"
import SolicitudesEmpresas from "../componentes/PagesAdministrador/SolicitudesEmpresas/SolicitudesEmpresas"
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudesEmpresas = () => {
  return (
    <LayoutAdmin>
      <FiltroAdmin />
      <SolicitudesEmpresas />
    </LayoutAdmin>
  )
}

export default AdminSolicitudesEmpresas;