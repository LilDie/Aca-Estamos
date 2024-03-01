import LayoutAdmin from "../Layout/LayoutAdmin"
import SolicitudesCV from "../componentes/PagesAdministrador/SolicitudesCV/SolicitudesCV";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin"

const AdminSolicitudescv = () => {
  return (
    <LayoutAdmin>
      <FiltroAdmin />
      <SolicitudesCV />
    </LayoutAdmin>
  )
}

export default AdminSolicitudescv;