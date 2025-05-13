import React from 'react';
import { useNavigate } from 'react-router-dom';

const EscolhaCultura: React.FC = () => {
  const navigate = useNavigate();

  const handleCulturaSelect = (cultura: string) => {
    // Store the selected culture in localStorage for later use
    localStorage.setItem('selectedCultura', cultura);
    // Navigate to the next screen
    navigate('/escolha-principio-ativo');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Escolha a Cultura</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => handleCulturaSelect('cafe')}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Café
          </button>
          
          <button
            onClick={() => handleCulturaSelect('soja')}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Soja
          </button>
          
          <button
            onClick={() => handleCulturaSelect('milho')}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Milho
          </button>
        </div>
      </div>
    </div>
  );
};

export default EscolhaCultura; 