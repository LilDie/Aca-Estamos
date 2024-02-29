import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from '../componentes/NavbarAdmin/NavbarAdmin';
import PanelAdmin from "../componentes/PagesAdministrador/PanelAdmin/PanelAdmin";
import FiltroAdmin from '../componentes/Filtros/FiltroAdmin/FiltroAdmin';

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
                  <FiltroAdmin />
                  <PanelAdmin/>
                  <Footer />
              </>
          )}
      </>
  );
};

export default PerfilAdmin;

