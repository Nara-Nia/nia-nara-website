import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';

const Home = lazy(() => import('../pages/Home'));
const SignIn = lazy(() => import('../pages/SignIn'));
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
        path="/sign-in" 
        element={
          <Layout>
            <SignIn />
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
