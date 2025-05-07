import { messages } from "../data/messages";

function PostList({ posts, loading, error }) {
    if (loading) return <p>{messages.posts_loading}</p>;
    if (error) return <p className="text-red-500">{error}</p>;
  
    return (
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">By {post.author} on {post.date}</p>
          </div>
        ))}
        {posts.length === 0 && <p className="text-gray-500">No posts available.</p>}
      </div>
    );
  }
  
  export default PostList;