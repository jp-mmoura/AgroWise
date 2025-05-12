import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const principiosAtivos = [
  'Ativo A - Glifosato',
  'Ativo B - 2,4-D',
  'Ativo C - Atrazina',
  'Ativo D - Paraquat',
  'Ativo E - Imazapir',
  'Ativo F - Metolacloro',
  'Ativo G - Clomazona',
  'Ativo H - Dicamba'
];

export default function EscolhaPrincipioAtivo() {
  const navigate = useNavigate();
  const [principioSelecionado, setPrincipioSelecionado] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the active ingredient selection
    console.log('Princípio ativo selecionado:', principioSelecionado);
    navigate('/dashboard');
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
          <h2 className="page-title">Escolha de Princípio Ativo</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="principio-ativo" className="form-label">
                Selecione o Princípio Ativo
              </label>
              <select
                id="principio-ativo"
                className="select-field"
                value={principioSelecionado}
                onChange={(e) => setPrincipioSelecionado(e.target.value)}
                required
              >
                <option value="">Selecione um princípio ativo</option>
                {principiosAtivos.map((principio) => (
                  <option key={principio} value={principio}>
                    {principio}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-primary w-full">
              Escolher
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 