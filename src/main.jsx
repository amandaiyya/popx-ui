import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fontsource-variable/rubik';
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
        <div className="w-screen h-screen">
          <div className="app-container px-5 py-8 flex flex-col justify-center items-center gap-8 shadow-lg">
            <p className='p-2 text-text font-light border-2 border-tertiary rounded-md'>404 Page Not Found</p>
          </div>
        </div>
      }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
