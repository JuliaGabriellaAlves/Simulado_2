// ministore/src/pages/Produtos.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css'; // Importa os estilos específicos desta página

const Produtos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = () => {
            const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            setProducts(storedProducts);
        };

        loadProducts(); // Carrega os produtos ao montar

        // Opcional: Adiciona um listener para o evento 'storage' para atualizar
        // a lista se o localStorage for alterado em outra aba ou janela do navegador.
        window.addEventListener('storage', loadProducts);

        // Função de limpeza para remover o listener quando o componente for desmontado
        return () => {
            window.removeEventListener('storage', loadProducts);
        };
    }, []); // O array vazio garante que este efeito roda apenas uma vez (na montagem)

    return (
        <section className="product-list-section container">
            <h2>Produtos Cadastrados</h2>
            <p>Total de produtos: {products.length}</p>
            {products.length === 0 ? (
                <p>Nenhum produto cadastrado ainda. <Link to="/cadastro" className="text-link">Cadastre um novo produto!</Link></p>
            ) : (
                <div className="product-list-items">
                    {products.map(product => (
                        <div key={product.id} className="product-list-item">
                            <span>{product.name} - R$ {product.price}</span>
                            {/* Link para a página de detalhes, passando o ID do produto */}
                            <Link to={`/produtos/${product.id}`} className="text-link">Ver detalhes</Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Produtos;