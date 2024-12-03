import { FaUserCircle, FaBell, FaRegMoon, FaRegSun, FaLanguage } from 'react-icons/fa';
import { HiOutlineViewList, HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';

const TopNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const handleLanguageChange = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'FR' : 'EN');
    };

    return (
        <nav className={`bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center transition-all duration-300 ${isDarkMode ? 'dark' : ''}`}>
            <div className="flex items-center space-x-4">
                {/* Mobile menu button */}
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <HiOutlineX className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <HiOutlineViewList className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    )}
                </button>

                {/* Logo or Dashboard title */}
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
                {/* Language switcher */}
                <button onClick={handleLanguageChange} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <FaLanguage className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    <span className="hidden lg:inline-block text-sm text-gray-700 dark:text-gray-200">{currentLanguage}</span>
                </button>

                {/* Theme switcher */}
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    {isDarkMode ? (
                        <FaRegSun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <FaRegMoon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    )}
                </button>

                {/* Notification bell */}
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <FaBell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </button>

                {/* User image */}
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <FaUserCircle className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 space-y-4 shadow-md">
                    <button onClick={handleLanguageChange} className="flex items-center space-x-2">
                        <FaLanguage className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        <span className="text-gray-700 dark:text-gray-200">{currentLanguage}</span>
                    </button>
                    <button onClick={toggleDarkMode} className="flex items-center space-x-2">
                        {isDarkMode ? (
                            <FaRegSun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        ) : (
                            <FaRegMoon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        )}
                        <span className="text-gray-700 dark:text-gray-200">Theme</span>
                    </button>
                    <button className="flex items-center space-x-2">
                        <FaBell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        <span className="text-gray-700 dark:text-gray-200">Notifications</span>
                    </button>
                    <button className="flex items-center space-x-2">
                        <FaUserCircle className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                        <span className="text-gray-700 dark:text-gray-200">User</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default TopNavbar;
