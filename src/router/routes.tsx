import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';

// Lazy loading dos componentes
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Loading = lazy(() => import('../pages/Loading'));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}
