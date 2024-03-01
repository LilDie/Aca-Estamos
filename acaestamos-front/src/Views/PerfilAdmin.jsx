import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import LayoutAdmin from "../Layout/LayoutAdmin"
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
              <LayoutAdmin>                 
                  <FiltroAdmin />
                  <PanelAdmin/>               
              </LayoutAdmin>
          )}
      </>
  );
};

export default PerfilAdmin;

