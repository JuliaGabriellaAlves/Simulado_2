// ministore/src/pages/Cadastro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação programática
import './Cadastro.css'; // Importa os estilos específicos desta página

const Cadastro = () => {
    const navigate = useNavigate(); // Inicializa o hook de navegação
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Validação básica
        if (!name.trim() || !price) {
            alert('Por favor, preencha o nome e o preço do produto.');
            return;
        }

        // Cria um ID único para o produto (simples para localStorage)
        const newProduct = {
            id: Date.now().toString(), // ID único baseado no timestamp
            name: name.trim(),
            price: parseFloat(price).toFixed(2), // Garante duas casas decimais
            description: description.trim()
        };

        // Carrega produtos existentes do localStorage
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

        // Adiciona o novo produto
        const updatedProducts = [...existingProducts, newProduct];

        // Salva a lista atualizada no localStorage
        try {
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            alert('Produto cadastrado com sucesso!');
            // Limpa o formulário
            setName('');
            setPrice('');
            setDescription('');
            // Redireciona para a lista de produtos após o cadastro
            navigate('/produtos'); // Redireciona para a rota /produtos
        } catch (error) {
            console.error("Erro ao salvar no localStorage:", error);
            alert("Não foi possível salvar o produto. O armazenamento pode estar cheio.");
        }
    };

    return (
        <section className="product-form-section container">
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome do produto"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Preço"
                        step="0.01" // Permite valores decimais
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição (opcional)</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descrição (opcional)"
                    ></textarea>
                </div>
                <button type="submit" className="button-primary">Salvar</button>
            </form>
        </section>
    );
};

export default Cadastro;