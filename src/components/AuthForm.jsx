import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../utils/api.js';
import { useAuth } from '../context/AuthContext.jsx';
import { messages } from '../data/messages.js';

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
      setError(err.message || (isLogin ? messages.auth_login_fail : messages.auth_register_fail));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border-2 border-blue-500">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? messages.auth_login : messages.auth_register}</h2>
      <div>
        <label htmlFor="username" className="block mb-2">{messages.auth_username}</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder={messages.auth_username_prompt}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2">{messages.auth_password}</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder={messages.auth_password_prompt}
        />
      </div>
      {!isLogin && (
        <div>
          <label htmlFor="email" className="block mb-2">{messages.auth_email}</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder={messages.auth_email_prompt}
          />
        </div>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
      >
        {isLogin ? messages.auth_login : messages.auth_register}
      </button>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="w-full text-blue-500 underline hover:text-blue-700"
      >
        {isLogin ? messages.auth_register : messages.auth_login}
      </button>
    </div>
  );
}

export default AuthForm;