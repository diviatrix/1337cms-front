import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { messages } from '../data/messages.js';
import { config } from '../data/config.js';

function NavBar() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-green-500 p-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side: Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-2 space-y-0">
            <img src={config.logo} alt={config.logo_alt} className="h- w-8 rounded-full" />
          </a>
          <a href="/" className="text-white text-md font-bold">{config.name}</a>
        </div>

        {/* Right side: User info and buttons */}
        <div className="flex items-center space-x-3">
          {token && user && (
            <span className="text-white font-medium text-sm">{messages.user_hello} {user.username}</span>
          )}
          {!token ? (
            <button
              onClick={() => navigate('/auth')}
              className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
            >
              {messages.user_btn_login}
            </button>
          ) : (
            <>
              <button
                onClick={() => alert('Profile clicked')}
                className="bg-yellow-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
              >
                {messages.user_btn_profile}
              </button>
              <button
                onClick={() => alert('Settings clicked')}
                className="bg-yellow-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
              >
                {messages.user_btn_settings}
              </button>
              <button
                onClick={() => navigate('/admin')}
                className="bg-yellow-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
              >
                {messages.user_btn_admin}
              </button>
              <button
                onClick={handleLogout}
                className="bg-cyan-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
              >
                {messages.user_btn_logout}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;