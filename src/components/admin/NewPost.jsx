import { useState } from 'react';
import { messages } from "../../data/messages";

function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-2xl mx-auto p-2 bg-white shadow-md rounded-lg mt-0 mb-4 text-sm font-mono">
            <h2 className="text-l font-bold mb-1 text-gray-800">{messages.admin_btn_new} {messages.admin_btn_post}</h2>
            <form onSubmit={handleSubmit} className="space-y-0">
                <div >
                    <label className="block font-medium text-gray-700">{messages.admin_btn_new_name_prompt}</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        className="flex items-center w-full px-0.5 py-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label className="blocktext-gray-700">Content:</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                        className="font-light flex items-center w-full px-0.5 py-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-40"
                    />
                </div>
                <div className="space-y-0">
                    <label className="blockfont-medium text-gray-700">Category:</label>
                    <select className="flex items-center w-full px-0.5 py-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="tech">Technology</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="education">Education</option>
                    </select>
                </div>
                <div className="space-y-0">
                    <label className="block text-gray-700">Tags:</label>
                    <input
                        type="text"
                        placeholder="Add tags separated by commas"
                        className="flex items-center w-full px-0.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-0">
                    <label className="block text-gray-700 ">{messages.admin_post_img_url}</label>
                    <input
                        type="text"
                        placeholder="Add image URL"
                        className="flex items-center w-full px-0.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label className=" text-green-700">Publish: </label>
                    <input
                        type="checkbox"
                        className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit"
                    className="flex items-center bg-green-500 text-white py-0 px-4 rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Submit
                </button>
            </form>
            {submitted && (
                <div className="mt-2 p-2 bg-gray-50 rounded-lg">
                    <h3 className="text-l font-semibold mb-2">Preview</h3>
                    <p className="mb-2"><span className="font-sans">{messages.admin_btn_new_name_prompt}</span> {title}</p>
                    <p><span className="font-serif">Content:</span> {content}</p>
                </div>
            )}
        </div>
    );
}

export default NewPost;