import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import NavbarLogin from '../componentes/NavbarLogin/NavbarLogin';
import PerfilUsuario from '../componentes/PagesUsuario/PerfilUsuario/PerfilUsuario';
import Footer from '../componentes/Footer/Footer';

const PerfilUsers = () => {
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
                    <PerfilUsuario />
                    <Footer />
                </>
            )}
        </>
    );
};

export default PerfilUsers;
