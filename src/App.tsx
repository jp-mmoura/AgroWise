import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CadastrarProduto from './components/CadastrarProduto';
import EscolhaPrincipioAtivo from './components/EscolhaPrincipioAtivo';
import EscolhaCultura from './components/EscolhaCultura';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/escolha-cultura" element={<EscolhaCultura />} />
        <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        <Route path="/escolha-principio-ativo" element={<EscolhaPrincipioAtivo />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
