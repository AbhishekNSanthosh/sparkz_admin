import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './modules/pages/Dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/hi',
      element: <>hi</>
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