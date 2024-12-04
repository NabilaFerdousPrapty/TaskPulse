import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addTask } from '../../redux/taskSlice';


const CreateTask = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addTask(data)); // Dispatch the addTask action
        reset(); // Clear the form after submission
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-md">
            <h2 className="text-2xl font-bold mb-4">Create Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        {...register('title', { required: 'Title is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Task title"
                    />
                    {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                </div>

                {/* Description Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Task description"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </div>

                {/* Due Date Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="dueDate">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        {...register('dueDate', { required: 'Due date is required' })}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                    {errors.dueDate && <span className="text-red-500 text-sm">{errors.dueDate.message}</span>}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-950 focus:outline-none focus:ring focus:ring-slate-300"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
