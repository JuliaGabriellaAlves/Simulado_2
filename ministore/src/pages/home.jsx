// ministore/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegação SPA
import './Home.css'; // Importa os estilos específicos desta página

const Home = () => {
    return (
        <section className="home-section container">
            <h2>Bem-vindo à MiniStore!</h2>
            <p>Explore nosso catálogo e cadastre novos produtos.</p>
            <div>
                {/* Usamos Link para navegar para as outras páginas sem recarregar */}
                <Link to="/produtos" className="button-link">Ver Produtos</Link>
                <Link to="/cadastro" className="text-link">Cadastrar Produto</Link>
            </div>
        </section>
    );
};

export default Home;