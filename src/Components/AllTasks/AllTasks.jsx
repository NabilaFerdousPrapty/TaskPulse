import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleteTask, selectFilteredTasks, setFilter } from "../../redux/taskSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { RiDraggable } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import TaskFilter from "../TaskFilter/TaskFilter";

const AllTasks = () => {
    const dispatch = useDispatch();
    const tasksFromRedux = useSelector(selectFilteredTasks);
    const [items, setItems] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleFilterChange = (filter) => {
        dispatch(setFilter(filter)); // Dispatch the setFilter action to update the filter in the Redux store
    };
    useEffect(() => {
        // Initialize the local state with tasks from Redux
        setItems(tasksFromRedux);
    }, [tasksFromRedux]);

    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    const handleDragOver = (e, item) => {
        e.preventDefault();
        setHoveredItem(item);
    };

    const handleDrop = (e, dropItem) => {
        e.preventDefault();

        const newItems = items.map((item) => {
            if (item.id === dropItem.id) {
                return draggedItem;
            }
            if (item.id === draggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setItems(newItems);
        setDraggedItem(null);
        setHoveredItem(null);
    };

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

    const handleToggleComplete = (taskId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to change the task status?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, change it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(toggleCompleteTask(taskId));
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
            <div className="flex justify-center items-center my-4">
                <TaskFilter onFilterChange={handleFilterChange} />
            </div>
            <table className="min-w-full table-auto border-collapse border-2 border-gray-300">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Due Date</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Overdue Status</th>
                        <th className="border px-4 py-2">Toggle Status</th>
                        <th className="border px-4 py-2">Actions</th>
                        <th className="border px-4 py-2">View</th>
                        <th className="border px-4 py-2">Drag</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((task, index) => (
                        <tr
                            key={task.id}
                            draggable
                            onDragStart={() => handleDragStart(task)}
                            onDragOver={(e) => handleDragOver(e, task)}
                            onDrop={(e) => handleDrop(e, task)}
                            onDragLeave={() => setHoveredItem(null)}
                            className={`hover:bg-gray-200 ${hoveredItem?.id === task.id ? 'bg-blue-100' : ''}`}
                        >
                            <td className="border px-4 py-2">{index + 1}</td>
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
                                {(new Date(task.dueDate) < new Date() && (!task.completed)) ? (
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
                                <Link
                                    to={`/view-task/${task.id}`}
                                    className="text-white bg-blue-400 px-2 py-1 rounded-md hover:bg-blue-500"
                                >
                                    View
                                </Link>
                            </td>
                            <td className="border px-4 py-2">
                                <RiDraggable
                                    className="text-gray-600 cursor-move"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;