import { useState, useEffect } from 'react';
import PostList from '../components/PostList.jsx';
import { posts as fetchApiPosts } from '../utils/api.js';
import { messages } from '../data/messages.js';

function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{messages.posts_latest}</h2>
      <PostList posts={posts} loading={loading} error={error} />
    </div>
  );
}

export default Index;