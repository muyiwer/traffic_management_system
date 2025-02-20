import { AdminLayout } from '@/components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const AppRoute = () => {
    const router = createBrowserRouter([
        {
            element: <AdminLayout/>
        }
    ]);
  return <RouterProvider router={router} />;
}
