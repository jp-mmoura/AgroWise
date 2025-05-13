import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-agro-green-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-agro-green-800">AgroWise</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 hover:text-agro-green-600"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            onClick={() => navigate('/escolha-cultura')}
            className="card cursor-pointer hover:shadow-lg transition-shadow bg-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-agro-green-800 mb-4">
                Cadastrar Produto
              </h2>
              <p className="text-gray-600">
                Adicione novos produtos ao sistema
              </p>
            </div>
          </div>

          <div
            onClick={() => navigate('/escolha-cultura')}
            className="card cursor-pointer hover:shadow-lg transition-shadow bg-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-agro-green-800 mb-4">
                Escolha de Princípio Ativo
              </h2>
              <p className="text-gray-600">
                Selecione e gerencie princípios ativos
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 