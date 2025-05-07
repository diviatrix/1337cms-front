import { messages } from "../../data/messages";

function NewPost() {
    const handleNewPost = () => {
        const title = window.prompt(messages.admin_btn_new_name_prompt);
        if (title === null) return; // User cancelled

        const content = window.prompt(messages.admin_btn_new_content_prompt);
        if (content === null) return; // User cancelled

        if (!title || !content) {
            alert(messages.admin_btn_new_post_empty);
            return;
        }

        // Dummy validation, replace with actual validation if needed
        if (title.length < 3 || content.length < 10) {
            alert(messages.admin_btn_new_post_invalid);
            return;
        }

        // Simulate API call
        console.log("New Post:", { title, content });
        alert(`${messages.admin_btn_submit} ${messages.admin_btn_success}!`); // Or messages.admin_btn_fail
    };

    return (
        <button onClick={handleNewPost} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            {messages.admin_btn_post}
        </button>
    );
}

export default NewPost;