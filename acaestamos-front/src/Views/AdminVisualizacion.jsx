import LayoutAdmin from "../Layout/LayoutAdmin"
import VisualizacionUsuario from "../componentes/PagesAdministrador/VisualizacionUsuarios/VisualizacionUsuarios";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin";

const AdminVisualizacion = () => {
  return (
    <LayoutAdmin>
      <FiltroAdmin />
      <VisualizacionUsuario />
    </LayoutAdmin>
  )
}

export default AdminVisualizacion;