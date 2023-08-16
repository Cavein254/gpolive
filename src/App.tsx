import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './scenes/Home.tsx';
import Layout from './scenes/layout/Layout';
import LoginPage from './scenes/LoginPage';
import RegisterPage from './scenes/RegisterPage';

const routesConfig = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];
const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
