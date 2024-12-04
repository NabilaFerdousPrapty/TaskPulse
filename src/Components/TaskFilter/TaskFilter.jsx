import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilteredTasks } from '../../redux/taskSlice'; // Adjust path as needed

const TaskFilter = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectFilteredTasks); // Get filtered tasks from Redux store

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        dispatch(setFilter(filter)); // Update filter in Redux store
    };

    return (
        <div>
            {/* Dropdown for Task Filter */}
            <div className="relative inline-block text-gray-100">
                <select
                    onChange={handleFilterChange}
                    className="px-4 py-3 bg-slate-900 rounded-2xl text-gray-100 border border-gray-300 focus:ring-2 focus:ring-gray-400"
                >
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="pending">Pending Tasks</option>
                    <option value="overdue">Overdue Tasks</option>
                </select>
            </div>


        </div>
    );
};

export default TaskFilter;
