import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch, FaUserCircle, FaBell, FaRegMoon, FaLanguage } from 'react-icons/fa';
import { HiOutlineViewList, HiOutlineX } from 'react-icons/hi';
import { CiLight } from 'react-icons/ci';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { setSearchTerm } from '../../redux/taskSlice';
import { MdOutlineLocationSearching } from "react-icons/md";
const TopNavbar = () => {
    const dispatch = useDispatch();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');

    // Use React Hook Form for handling form submission
    const { register, handleSubmit, reset } = useForm();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const handleLanguageChange = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'FR' : 'EN');
    };

    const onSearch = (data) => {
        // Dispatch the search query to Redux
        dispatch(setSearchTerm(data.search));  // Replace with the actual Redux action to filter tasks
        reset(); // Clear the search field after submission
    };

    return (
        <nav className={`bg-white dark:bg-gray-900 p-2 sm:p-4 shadow-md flex justify-between items-center transition-all duration-300 ${isDarkMode ? 'dark' : ''}`}>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <HiOutlineX className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <HiOutlineViewList className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
                    )}
                </button>
                <span className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <RiDashboardHorizontalFill className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="ml-1 sm:ml-2"></span>
                </span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Search field */}
                <form onSubmit={handleSubmit(onSearch)} className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-2 sm:px-4 py-1 sm:py-2">
                    <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
                    <input
                        type="text"
                        {...register("search")}
                        placeholder="Search..."
                        className="ml-2 bg-transparent focus:outline-none text-sm sm:text-base text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button type="submit" className="ml-2 text-sm sm:text-base text-gray-700 dark:text-gray-200 hover:underline">
                        <MdOutlineLocationSearching />
                    </button>
                </form>

                {/* Language switcher */}
                <button onClick={handleLanguageChange} className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <FaLanguage className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                    <span className="hidden lg:inline-block text-xs sm:text-sm text-gray-700 dark:text-gray-200">{currentLanguage}</span>
                </button>

                {/* Theme switcher */}
                <button onClick={toggleDarkMode} className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    {isDarkMode ? (
                        <CiLight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <FaRegMoon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                    )}
                </button>

                {/* Notification bell */}
                <button className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 relative">
                    <FaBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                    <span className='text-white bg-blue-500 rounded-full px-1 py-0 text-xs absolute right-0 sm:right-1 top-0'>3</span>
                </button>

                {/* User image */}
                <button className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <FaUserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-200" />
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-12 sm:top-16 left-0 w-full bg-white dark:bg-gray-900 p-2 sm:p-4 space-y-2 sm:space-y-4 shadow-md">
                    <form onSubmit={handleSubmit(onSearch)} className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-2 sm:px-4 py-1 sm:py-2">
                        <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
                        <input
                            type="text"
                            {...register("search")}
                            placeholder="Search..."
                            className="ml-2 bg-transparent focus:outline-none text-sm sm:text-base text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                        />
                        <button type="submit" className="ml-2 text-sm sm:text-base text-gray-700 dark:text-gray-200 hover:underline">
                            Search
                        </button>
                    </form>
                    <button onClick={handleLanguageChange} className="flex items-center space-x-1 sm:space-x-2">
                        <FaLanguage className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{currentLanguage}</span>
                    </button>
                    <button onClick={toggleDarkMode} className="flex items-center space-x-1 sm:space-x-2">
                        {isDarkMode ? (
                            <CiLight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                        ) : (
                            <FaRegMoon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                        )}
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">Theme</span>
                    </button>
                    <button className="flex items-center space-x-1 sm:space-x-2">
                        <FaBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">Notifications</span>
                    </button>
                    <button className="flex items-center space-x-1 sm:space-x-2">
                        <FaUserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-200" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">Profile</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default TopNavbar;
