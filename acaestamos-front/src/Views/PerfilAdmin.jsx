import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Footer from "../componentes/Footer/Footer";
import PanelAdmin from "../componentes/PagesAdministrador/PanelAdmin/PanelAdmin";
import NavbarAdmin from '../componentes/NavbarAdmin/NavbarAdmin';

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
                  <NavbarAdmin />
                  <PanelAdmin/>
                  <Footer />
              </>
          )}
      </>
  );
};

export default PerfilAdmin;

