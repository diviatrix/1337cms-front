import { messages } from '../data/messages.js';
import { config } from '../data/config.js';

function Footer() {
    return (
        <footer className="bg-gray-700 text-white text-small py-1 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Left Column - Icons */}
                    <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-3">{messages.links_follow_message}</h3>
                        <div className="flex space-x-4">
                            <a href={messages.links_follow_1_link} className="text-blue-400 hover:text-blue-300" target='_blank' rel="noopener noreferrer">
                                <img width={32} src={messages.links_follow_1_icon} alt={messages.links_follow_1_icon_alt} />
                            </a>
                            <a href={messages.links_follow_2_link} className="text-blue-400 hover:text-blue-300" target='_blank' rel="noopener noreferrer">
                                <img width={32} src={messages.links_follow_2_icon} alt={messages.links_follow_2_icon_alt} />
                            </a>
                            {/* Add more icons as needed */}
                        </div>
                    </div>

                    {/* Center Column - Dummy Text */}
                    <div className="w-full md:w-2/5 px-4 mb-4 md:mb-0">
                        <p className="text-sm">
                            {messages.footer_text}
                            </p>
                    </div>

                    {/* Right Column - Current Footer Values */}
                    <div className="w-full md:w-2/5 px-4 text-left md:text-right">
                        <p className="text-sm mb-2">{config.description}</p>
                        <p className="text-sm">&copy; {config.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
// This code defines a Footer component with a three-column layout.
// Left column: Social media icons.
// Center column: Placeholder text.
// Right column: Site description and copyright information.
// The footer has a dark background and white text.