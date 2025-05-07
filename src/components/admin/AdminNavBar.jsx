import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { messages } from '../../data/messages.js';
import { config } from '../../data/config.js';


function AdminNavBar() {
  const { user, token } = useAuth();
  const navigate = useNavigate();


return (
    <nav className="bg-gray-600 p-2 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Left side: Logo and Site Name */}
                    <div className="flex items-center space-x-3">
                        <a href="/admin" className="flex items-center space-x-2 space-y-0">
                            <img src={config.logo} alt={config.logo_alt} className="h-8 w-8 rounded-full" />
                        </a>
                        <p className="text-green-400 drop-shadow-[0_0_3px_rgba(74,222,128,0.5)] hover:text-green-300 hover:drop-shadow-[0_0_5px_rgba(74,222,128,0.7)] transition-all duration-300">{messages.admin_header}</p>
                    </div>

                    {/* Right side: User info and buttons */}
            <div className="flex items-center space-x-3">
                {token && user && (
                    <span className="text-white font-medium text-sm">{messages.user_role}: {user.role}</span>
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
                            onClick={() => navigate('/admin?tab=Posts')}
                            className="bg-yellow-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
                        >
                            {messages.admin_btn_new} {messages.admin_btn_post}
                        </button>
                        <button
                            onClick={() => navigate('/admin?tab=Files')} // Assuming NewFile might open a modal or similar, or navigate differently
                            className="bg-yellow-500 text-white px-2 py-1 text-sm rounded hover:bg-pink-400 transition duration-200"
                        >
                            {messages.admin_btn_new} {messages.admin_btn_File}
                        </button>
                    </>
                )}
            </div>
        </div>
    </nav>
);
}

export default AdminNavBar;