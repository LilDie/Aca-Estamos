import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import { useState, useEffect } from "react";
import Navbar from "../componentes/Navbar/Navbar";



const LayoutAdmin = ({ children }) => {
  const [estaLogeado, setEstaLogeado] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setEstaLogeado(true);
    } else {
      setEstaLogeado(false);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
     
      {estaLogeado ? <NavbarAdmin /> : <Navbar />}
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;







