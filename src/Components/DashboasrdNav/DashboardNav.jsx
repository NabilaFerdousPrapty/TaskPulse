import { AiOutlineDashboard, AiOutlineBarChart, AiOutlineBook } from "react-icons/ai";
import { FiLayers, FiSettings, FiMenu } from "react-icons/fi"; // Added FiMenu for the hamburger icon
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside
                className={`flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-[#081229] border-r rtl:border-r-0 rtl:border-l border-gray-700 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
            >
                <Link to={'/'}>
                    <img className="w-auto h-20" src="https://i.ibb.co.com/fYv0mH4/task.png" alt="Logo" />
                </Link>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6">
                        {/* Analytics Section */}
                        <div className="space-y-3">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                Task Pluse
                            </label>

                            <Link
                                to={'/'}
                                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                href="/"
                            >
                                <AiOutlineDashboard className="w-5 h-5" />
                                <span className="mx-2 text-sm font-medium">
                                    My Work Space
                                </span>
                            </Link>

                            <Link to={'create-task'}
                                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                href="/create-task"
                            >
                                <AiOutlineBarChart className="w-5 h-5" />
                                <span className="mx-2 text-sm font-medium">
                                    Create Task
                                </span>
                            </Link>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-3">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Content</label>

                            <Link
                                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                href="#"
                            >
                                <AiOutlineBook className="w-5 h-5" />
                                <span className="mx-2 text-sm font-medium">Guides</span>
                            </Link>

                            <Link
                                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                href="#"
                            >
                                <FiLayers className="w-5 h-5" />
                                <span className="mx-2 text-sm font-medium">Hotspots</span>
                            </Link>

                            <Link
                                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                href="#"
                            >
                                <FaRegCheckCircle className="w-5 h-5" />
                                <span className="mx-2 text-sm font-medium">Checklists</span>
                            </Link>
                        </div>


                    </nav>
                </div>
            </aside>

            {/* Hamburger Icon for small screens */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    <FiMenu className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
