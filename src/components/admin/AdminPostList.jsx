import { messages } from "../../data/messages";

function AdminPostList({ posts, loading, error }) {
    if (loading) return <p>{messages.posts_loading}</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    
    return (
        <>            
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="card">
                        <h3 className="text-l">{post.title}</h3>
                        <p className="text-gray-600 font-light">{post.content}</p>
                        <p className="font-light text-sm text-gray-500 mt-1">By {post.author} on {post.date}</p>
                        <div className="mt-1 space-x-2">
                            <button 
                                className="px-2 py-0 bg-blue-500 text-white rounded hover:bg-blue-600 font-mono text-sm"
                                onClick={() => console.log('Edit post:', post.id)}
                            >
                                Edit
                            </button>
                            <button 
                                className={`px-2 py-0 ${post.published ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded font-mono text-sm`}
                                onClick={() => console.log('Toggle post status:', post.id)}
                            >
                                {post.published ? 'Unpublish' : 'Publish'}
                            </button>
                        </div>
                    </div>
                ))}
                {posts.length === 0 && <p className="text-gray-500">No posts available.</p>}
            </div>
        </>
    );
}

export default AdminPostList;