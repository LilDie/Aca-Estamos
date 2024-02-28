import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Footer from "../componentes/Footer/Footer";
import NavbarLogin from '../componentes/NavbarLogin/NavbarLogin';
import PanelAdmin from "../componentes/PagesAdministrador/PanelAdmin/PanelAdmin";

const PerfilAdmin = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }, []);

  return (
      <>
          {loading ? (
              <Loading />
          ) : (
              <>
                  <NavbarLogin />
                  <PanelAdmin/>
                  <Footer />
              </>
          )}
      </>
  );
};

export default PerfilAdmin;

