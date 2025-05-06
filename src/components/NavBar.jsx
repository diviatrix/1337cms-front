import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function NavBar() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">1337+</div>
        <div className="flex items-center space-x-4">
          {token && user && (
            <span className="text-white font-medium">Hi, {user.username}</span>
          )}
          {!token ? (
            <button
              onClick={() => navigate('/auth')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Login / Register
            </button>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
              <button
                onClick={() => alert('Profile clicked')}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
              >
                Profile
              </button>
              <button
                onClick={() => alert('Settings clicked')}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
              >
                Settings
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;