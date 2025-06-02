import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
