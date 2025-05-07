import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Auth from './pages/Auth.jsx';
import Admin from './pages/Admin.jsx'; // Added Admin import
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} /> {/* Added Admin route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer /> {/* Added Footer component */}
      </div>
    </AuthProvider>
  );
}

export default App;