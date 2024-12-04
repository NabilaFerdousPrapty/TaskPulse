import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleCompleteTask } from '../../redux/taskSlice';
import Swal from 'sweetalert2';

const TaskDetails = () => {
    const { id } = useParams(); // Extract `id` from the URL
    const dispatch = useDispatch();

    // Get the task from the Redux state using the id
    const task = useSelector((state) =>
        state.tasks.tasks.find((task) => task.id === parseInt(id))
    );

    // If task not found, display a message
    if (!task) {
        return <div>Task not found.</div>;
    }

    // Function to handle task deletion
    const handleDelete = (taskId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTask(taskId));
                Swal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                );
            }
        });
    };



    return (
        <div className="flex justify-center items-center my-9">
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{task.dueDate}</span>
                    <span className={`px-2 py-1 text-sm font-bold ${task.completed ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'} rounded-full`}>
                        {task.completed ? 'Completed' : 'Pending'}
                    </span>


                </div>

                <div className="mt-2">
                    <a
                        href="#"
                        className="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline"
                        tabIndex="0"
                        role="link"
                    >
                        {task.title}
                    </a>
                    <p className="mt-2 text-gray-600 ">{task.description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">


                    <button
                        onClick={handleDelete}
                        className="px-3 py-1 text-sm font-bold text-white transition-colors duration-300 transform bg-red-600 rounded cursor-pointer hover:bg-red-500"
                        tabIndex="0"
                        role="button"
                    >
                        Delete Task
                    </button>
                </div>


            </div>
        </div>
    );
};

export default TaskDetails;
