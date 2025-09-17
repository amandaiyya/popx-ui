import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';

import {
  HomePage,
  SignupPage,
  LoginPage,
  ProfilePage,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    // root route
    <Route path='/' element={<Layout />}>
      {/* children routes */}
      <Route index element={<HomePage />}/>
      <Route path='signup' element={<SignupPage />}/>
      <Route path='login' element={<LoginPage />}/>
      <Route path='profile' element={<ProfilePage />}/>

      {/* Route for The Wildcard Paths */}
      <Route path='*' element={
        <>
          <p>404 Page Not found</p>
        </>
      }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
