import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastrarProduto() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    fornecedor: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the product registration
    console.log('Produto cadastrado:', produto);
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-agro-green-50 to-white">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-agro-green-800">AgroWise</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="nav-link"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="card">
          <h2 className="page-title">Cadastrar Produto</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="nome" className="form-label">Nome do Produto</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="input-field"
                value={produto.nome}
                onChange={handleChange}
                required
                placeholder="Digite o nome do produto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                className="input-field"
                value={produto.descricao}
                onChange={handleChange}
                required
                placeholder="Digite a descrição do produto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="preco" className="form-label">Preço</label>
              <input
                type="number"
                id="preco"
                name="preco"
                className="input-field"
                value={produto.preco}
                onChange={handleChange}
                required
                placeholder="Digite o preço"
                min="0"
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantidade" className="form-label">Quantidade</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                className="input-field"
                value={produto.quantidade}
                onChange={handleChange}
                required
                placeholder="Digite a quantidade"
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
              <input
                type="text"
                id="fornecedor"
                name="fornecedor"
                className="input-field"
                value={produto.fornecedor}
                onChange={handleChange}
                required
                placeholder="Digite o nome do fornecedor"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 