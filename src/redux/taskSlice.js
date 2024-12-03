// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper function to get tasks from localStorage
const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

// Initial state
const initialState = {
    tasks: loadTasksFromLocalStorage(),
    filter: 'all', // Possible values: 'all', 'completed', 'pending', 'overdue'
};

// Create slice for tasks
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
                completed: false,
            };
            state.tasks.push(newTask);
            saveTasksToLocalStorage(state.tasks);
        },
        editTask: (state, action) => {
            const { id, title, description, dueDate } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], title, description, dueDate };
                saveTasksToLocalStorage(state.tasks);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        toggleCompleteTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
                state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
                saveTasksToLocalStorage(state.tasks);
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

// Helper function to save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Export actions
export const { addTask, editTask, deleteTask, toggleCompleteTask, setFilter } = taskSlice.actions;

// Selectors for filtering tasks
export const selectFilteredTasks = (state) => {
    const { tasks, filter } = state.tasks;
    const today = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    switch (filter) {
        case 'completed':
            return tasks.filter(task => task.completed);
        case 'pending':
            return tasks.filter(task => !task.completed);
        case 'overdue':
            return tasks.filter(task => !task.completed && task.dueDate < today);
        default:
            return tasks;
    }
};

// Export reducer
export default taskSlice.reducer;
