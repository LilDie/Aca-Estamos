import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Layout from "../Layout/Layout";
import PerfilUsuario from '../componentes/PagesUsuario/PerfilUsuario/PerfilUsuario';

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
                <Layout>
                    <PerfilUsuario />
                </Layout>
            )}
        </>
    );
};

export default PerfilUsers;
