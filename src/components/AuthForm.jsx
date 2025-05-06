import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../utils/api.js';
import { useAuth } from '../context/AuthContext.jsx';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        const data = await login(username, password);
        setAuth(data.user, data.token);
        navigate('/');
      } else {
        await register(username, password, email);
        navigate('/');
      }
    } catch (err) {
      setError(err.message || (isLogin ? 'Login failed' : 'Registration failed'));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border-2 border-blue-500">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <div>
        <label htmlFor="username" className="block mb-2">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your password"
        />
      </div>
      {!isLogin && (
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your email"
          />
        </div>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="w-full text-blue-500 underline hover:text-blue-700"
      >
        {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
      </button>
    </div>
  );
}

export default AuthForm;