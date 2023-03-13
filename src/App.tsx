import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenericCard from './components/GenericCard';
import BasicInfo from './components/BasicInfo';
import SignIn from './components/SignUp';
import RMSHome from './components/RMSHome';
import RMSTable from './components/RMSTable';
import ForgetPassword from './components/ForgetPassword';
import LogIn from './components/LogIn';
import RMSnewArea from './components/RMSnewArea';
import RMSNavbar from './components/RMSNavbar';




function App() {
  const router = createBrowserRouter([
    { path: '/', element: <GenericCard /> }, 
    { path: '/s', element: <SignIn/> },  
    { path: '/l', element: <LogIn/> },  
    { path: '/b', element: <BasicInfo/> },  
    { path: '/rmshome', element: <RMSHome/> }, 
    { path: '/rmstable', element: <RMSTable/> }, 
    { path: '/forgetpass', element: <ForgetPassword/> }, 
    { path: '/f', element: <RMSnewArea/>}, 
    { path: '/p', element: <RMSNavbar/>},  

   ])
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
