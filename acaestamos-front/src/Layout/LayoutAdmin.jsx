import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";


const LayoutAdmin = ({children}) => {
  return (
    <>
      <NavbarAdmin />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    
    </>
  );
};

export default LayoutAdmin;
