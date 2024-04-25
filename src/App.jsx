import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './modules/pages/Dashboard/Dashboard';
import Login from './modules/pages/Login/Login';
import EventDetails from './modules/pages/EventDetails/EventDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/event/:id',
          element: <EventDetails />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App