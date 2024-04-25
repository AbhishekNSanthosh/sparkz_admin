import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './modules/pages/Dashboard/Dashboard';
import Login from './modules/pages/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App