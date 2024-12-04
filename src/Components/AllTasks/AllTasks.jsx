import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleteTask, selectFilteredTasks } from "../../redux/taskSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";  // Icons for Edit and Delete
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Link } from "react-router";

const AllTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectFilteredTasks);  // Select filtered tasks from Redux store

    const handleDelete = (taskId) => {
        // SweetAlert2 confirmation before deleting the task
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTask(taskId));  // Dispatch delete action if confirmed
                Swal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                );
            }
        });
    };

    const handleToggleComplete = (taskId) => {
        // SweetAlert2 confirmation before toggling completion
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to change the task status?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, change it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(toggleCompleteTask(taskId));  // Dispatch toggle completion action if confirmed
                Swal.fire(
                    'Updated!',
                    'Your task status has been updated.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="overflow-x-auto bg-gray-100 p-6">
            <table className="min-w-full table-auto border-collapse border-2 border-gray-300">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Due Date</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Overdue Status</th>
                        <th className="border px-4 py-2">Toggle Status</th>
                        <th className="border px-4 py-2">Actions</th>
                        <th className="border px-4 py-2">View</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className="hover:bg-gray-200">
                            <td className="border px-4 py-2">{task.title.slice(0, 10)}...</td>
                            <td className="border px-4 py-2">{task.description.slice(0, 19)}..</td>
                            <td className="border px-4 py-2">{task.dueDate}</td>
                            <td className="border px-4 py-2">
                                {task.completed ? (
                                    <span className="text-green-500 font-bold">Completed</span>
                                ) : (
                                    <span className="text-red-500 font-bold">Pending</span>
                                )}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {new Date(task.dueDate) < new Date() ? (
                                    <span className="text-red-500 font-bold">Overdue</span>
                                ) : (
                                    <span className="text-green-500 font-bold">Not Overdue</span>
                                )}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    onClick={() => handleToggleComplete(task.id)}
                                    className="text-white bg-stone-600 px-2 py-1 rounded-md hover:bg-stone-500"
                                >
                                    {task.completed ? "Mark As Pending" : "Mark As Completed"}
                                </button>
                            </td>
                            <td className="border px-4 py-2 flex justify-center items-center gap-2">
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="mr-2 text-red-500 hover:text-red-700"
                                >
                                    <FaTrashAlt />
                                </button>
                                <button className="text-yellow-500 hover:text-yellow-700">
                                    <FaEdit />
                                </button>
                            </td>
                            <td className="border px-4 py-2">
                                <Link to={`/view-task/${task.id}`}
                                    className="text-white bg-blue-400 px-2 py-1 rounded-md hover:bg-blue-500">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
