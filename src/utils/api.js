import axios from 'axios';

const API_URL = '/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { username, password, email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const db = async () => {
    try {
        const response = await axios.get(`${API_URL}/db`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const auth = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const posts = async () => {
  try {
    // Mock CMS-like data until a real posts API is provided
    return [
      {
        id: 1,
        title: "Welcome to Our CMS",
        content: "This is the first post on our new content management system. Stay tuned for more updates!",
        author: "Admin",
        date: "2025-05-06"
      },
      {
        id: 2,
        title: "How to Use the CMS",
        content: "Learn how to create, edit, and manage posts with our intuitive CMS interface.",
        author: "Editor",
        date: "2025-05-05"
      },
      {
        id: 3,
        title: "New Features Coming Soon",
        content: "We're working on adding an admin panel and more features to enhance your experience.",
        author: "Admin",
        date: "2025-05-04"
      }
    ];
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};