import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider } from './components /UserContext';
import GuestRoute from './components /GuestRoute';
import AuthForm from './components /Auth/AuthForm';
import BookingRoom from './components /Booking/BookingRoom';
import BookedRooms from './components /Booking/BookedRooms';


const router = createBrowserRouter([
  { path: '/', 
    element: <App />
  },
    {children: [
      // Define nested routes here if needed
      {path: '/booking',
         element: <BookingRoom/>
        },
        {
          path:"/rooms",
          element:<BookedRooms/>
        },
      {
        path:"/auth",
        element:(
          <GuestRoute>
            <AuthForm/>
          </GuestRoute>
        )
      }
    ]}
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
