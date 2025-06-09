// ministore/src/pages/Detalhesproduto.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Detalhesproduto.css'; // Importa os estilos específicos desta página

const DetalhesProduto = () => {
    const { id } = useParams(); // Obtém o ID do produto da URL
    const navigate = useNavigate(); // Hook para navegação programática
    const [product, setProduct] = useState(null);

    // useEffect para lidar com o ciclo de vida (montagem e desmontagem)
    useEffect(() => {
        console.log("Produto carregado!"); // Log de montagem

        // Carrega o produto do localStorage baseado no ID
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const foundProduct = storedProducts.find(p => p.id === id); // Busca pelo ID obtido da URL
        setProduct(foundProduct);

        // Função de limpeza (executada na desmontagem ou antes de uma nova execução do efeito)
        return () => {
            console.log("Saindo da página de detalhes."); // Log de desmontagem
        };
    }, [id]); // O efeito é re-executado quando o 'id' na URL muda

    // Exibe mensagem de produto não encontrado
    if (!product) {
        return (
            <section className="product-detail-section container">
                <h2>Produto não encontrado.</h2>
                <button className="button-secondary" onClick={() => navigate('/produtos')}>Voltar para Produtos</button>
            </section>
        );
    }

    return (
        <section className="product-detail-section container">
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <p>Descrição: {product.description || 'Nenhuma descrição fornecida.'}</p>
            <button className="button-secondary" onClick={() => navigate(-1)}>Voltar</button> {/* navigate(-1) volta para a página anterior no histórico */}
        </section>
    );
};

export default DetalhesProduto;