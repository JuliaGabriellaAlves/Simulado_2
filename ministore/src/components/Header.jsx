// ministore/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom para navegação

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>MiniStore</h1>
                <nav>
                    <ul>
                        {/* Usamos o componente Link do react-router-dom para navegação SPA */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/cadastro">Cadastrar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;