import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleteTask, setFilter, selectFilteredTasks } from "../../redux/taskSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";  // Icons for Edit and Delete

const AllTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectFilteredTasks);  // Select filtered tasks from Redux store

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));  // Dispatch delete action
    };

    const handleToggleComplete = (taskId) => {
        dispatch(toggleCompleteTask(taskId));  // Dispatch toggle completion action
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Due Date</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="border px-4 py-2">{task.title}</td>
                            <td className="border px-4 py-2">{task.description}</td>
                            <td className="border px-4 py-2">{task.dueDate}</td>
                            <td className="border px-4 py-2">
                                {task.completed ? (
                                    <span className="text-green-500">Completed</span>
                                ) : (
                                    <span className="text-red-500">Pending</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleToggleComplete(task.id)}
                                    className="mr-2 text-blue-500"
                                >
                                    {task.completed ? "Mark as Pending" : "Mark as Completed"}
                                </button>
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="mr-2 text-red-500"
                                >
                                    <FaTrashAlt />
                                </button>
                                <button className="text-yellow-500">
                                    <FaEdit />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
