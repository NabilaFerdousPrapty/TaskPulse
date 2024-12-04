# Task Management App: Task pulse

Welcome to the **Task Management App**! This web application allows you to manage tasks efficiently, providing features like task creation, deletion, status toggling, and more. It is built using modern technologies like React, Redux, and Tailwind CSS.

## Live Demo

You can view the live version of this app here: [TaskPulse](https://brandklintaskmanagement.netlify.app/)

## Features

- **Create, Read, Update, and Delete (CRUD) Tasks**: Easily manage tasks by creating, updating, and deleting them.
- **LocalStorage Integration**: Tasks are stored in the browser's **localStorage** to persist data across page reloads. This ensures that your tasks are retained even if the browser is closed and reopened.
- **Task Completion Toggle**: Mark tasks as completed or pending.
- **Responsive Design**: The app is fully responsive and works on both desktop and mobile devices.
- **Dark Mode Support**: The app supports both light and dark modes for a better user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **React Router**: For routing and navigation between different pages.
- **Redux Toolkit**: For managing the state and reducers in the app efficiently.

## Installation Guide

To get started with this project locally, follow the steps below.

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can verify this by running the following commands:

```bash
node -v
npm -v
```

If you don't have **Node.js** and **npm** installed, you can download and install it from the official [Node.js website](https://nodejs.org/).

### 1. Clone the repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/NabilaFerdousPrapty/TaskPulse
```

### 2. Install Dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd TaskPulse
npm install
```

### 3. Start the Development Server

After installing the dependencies, you can start the development server using the following command:

```bash
npm run dev
```

This will run the app on `http://localhost:5173`. You can now open your browser and view the application locally.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Starts the development server at `http://localhost:5173` for local development.

### `npm run build`

Builds the app for production into the `dist/` directory. It optimizes the build for the best performance.

### `npm run dev`

Starts the production server with the built files.

## Folder Structure

Here's an overview of the folder structure:

```
task-management-app/
├── public/                # Public files (index.html, etc.)
├── src/                   # Source files
│   ├── components/        # React components
│   ├── redux/             # Redux-related files (actions, reducers, etc.)
│   ├── styles/            # Tailwind CSS configuration and styles
│   └── main.js             # Main component
├── package.json           # Project configuration file
├── tailwind.config.js     # Tailwind CSS configuration file
└── README.md              # This file
```

## Contributing

Feel free to fork the repository and submit pull requests with improvements, bug fixes, or new features. If you're planning to make a substantial change, please open an issue or create a discussion beforehand to make sure we're aligned.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

We hope you enjoy using the Task Management App! Feel free to explore, contribute, and create amazing things with it! 🚀
