import { useRoutes } from 'react-router-dom';

import { useAuth } from '@/lib/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import Layout from '@/components/Layout';
import Feed from '@/features/Feed';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Feed/> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return (
    <Layout>
      {element}
    </Layout>
  );
};