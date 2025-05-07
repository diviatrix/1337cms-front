import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import AdminPostList from '../components/admin/AdminPostList.jsx';
import { posts as fetchApiPosts } from '../utils/api.js';
import { messages } from '../data/messages.js';
import NewPost from '../components/admin/NewPost.jsx';
import AdminNavBar from '../components/admin/AdminNavBar.jsx';

function Admin() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const queryParams = new URLSearchParams(location.search);
    const [activeTab, setActiveTab] = useState(queryParams.get('tab') || 'Posts');

    // Update activeTab when the query parameter changes
    useEffect(() => {
        const currentQueryParams = new URLSearchParams(location.search);
        const tabFromQuery = currentQueryParams.get('tab') || 'Posts';
        setActiveTab(tabFromQuery);
    }, [location.search]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchApiPosts();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load posts');
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Posts':
                return <AdminPostList posts={posts} loading={loading} error={error} />;
            case 'Users':
                return (
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-semibold">User Management</h3>
                        <p className="mt-2 text-gray-600">Manage your users here. (Dummy Interface)</p>
                    </div>
                );
            case 'Files':
                return (
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-semibold">File Management</h3>
                        <p className="mt-2 text-gray-600">Manage your files here. (Dummy Interface)</p>
                    </div>
                );
            case 'Settings':
                return (
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-semibold">Site Settings</h3>
                        <p className="mt-2 text-gray-600">Configure your site settings here. (Dummy Interface)</p>
                    </div>
                );
            case 'Design':
                return (
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-semibold">Design Customization</h3>
                        <p className="mt-2 text-gray-600">Customize your site's design here. (Dummy Interface)</p>
                    </div>
                );
            default:
                return null;
        }
    };

    const tabs = ['Posts', 'Users', 'Files', 'Settings', 'Design'];

    const handleTabClick = (tabName) => {
        navigate(`/admin?tab=${tabName}`);
        // The useEffect listening to location.search will handle setActiveTab
    };

    return (
        <div className="flex flex-col min-h-[80vh] bg-gray-100">
            <AdminNavBar />
            <div className="flex-grow max-w-1xl mx-auto w-full mt-1 px-1 pb-1 flex flex-col">
                <div className="mb-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)} // Use handleTabClick
                                className={`${
                                    activeTab === tab
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Posts tab with side-by-side layout */}
                {activeTab === 'Posts' ? (
                    <div className="flex gap-4">
                        <div className="w-1/3">
                            <NewPost />
                        </div>
                        <div className="w-2/3">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">{messages.posts_latest}</h2>
                            {renderContent()}
                        </div>
                    </div>
                ) : (
                    <div className="flex-grow">{renderContent()}</div>
                )}
            </div>
        </div>
    );
}

export default Admin;