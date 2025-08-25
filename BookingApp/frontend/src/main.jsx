import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider } from './components /UserContext';


const router = createBrowserRouter([
  { path: '*', element: <App /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
