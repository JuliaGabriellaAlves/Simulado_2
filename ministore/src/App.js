// ministore/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes de páginas
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Produtos from './pages/Produtos.jsx';
import DetalhesProduto from './pages/Detalhesproduto.jsx'; // Nome do arquivo no seu print é 'Detalhesproduto' (p minúsculo)

// Importa os componentes de layout
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Importa o CSS principal global (index.css), onde estão os estilos do Header e Footer
import './index.css'; // <-- ESTA LINHA É CRÍTICA! REMOVA A LINHA DO APP.CSS SE AINDA TIVER.

function App() {
  return (
    <Router>
      <Header /> {/* O Header aparece em todas as páginas */}
      <main> {/* Um container principal para o conteúdo das páginas */}
        <Routes> {/* Routes agrupa as definições de rotas */}
          {/* Define cada rota com seu caminho (path) e o elemento (componente) a ser renderizado */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          {/* Rota para detalhes do produto. O :id é um parâmetro dinâmico na URL */}
          <Route path="/produtos/:id" element={<DetalhesProduto />} />
        </Routes>
      </main>
      <Footer /> {/* O rodapé aparece em todas as páginas */}
    </Router>
  );
}

export default App;