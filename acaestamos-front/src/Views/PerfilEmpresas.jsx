import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Footer from "../componentes/Footer/Footer";
import NavbarLogin from "../componentes/NavbarLogin/NavbarLogin";
import PerfilEmpresa from "../componentes/PagesEmpresas/PerfilEmpresa/PerfilEmpresa";
import FiltroEmpresa from '../componentes/Filtros/FiltroEmpresa/FiltroEmpresa';

const PerfilEmpresas = () => {
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
                  <FiltroEmpresa />
                  <PerfilEmpresa />
                  <Footer />
              </>
          )}
      </>
  );
};

export default PerfilEmpresas;

