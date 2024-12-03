import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import AllTasks from './Components/AllTasks/AllTasks';
import TaskDetails from './Components/TaskDetails/TaskDetails';
import EditTask from './Components/EditTask/EditTask';
import DashBoard from './Layouts/DashboardLayout/DashboardLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route index element={<AllTasks />} /> {/* Default route */}
          <Route path=":id" element={<TaskDetails />} />
          <Route path=":id/edit" element={<EditTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
