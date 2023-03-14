import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenericCard from './components/GenericCard';
import BasicInfo from './Page/BasicInfo';
import SignIn from './Page/SignUp';
import RMSHome from './Page/RMSHome';
import RMSTable from './components/RMSTable';
import ForgetPassword from './components/ForgetPassword';
import LogIn from './Page/LogIn';
import RMSnewArea from './components/RMSnewArea';
import RMSNavbar from './components/RMSNavbar';
import ModalResturant from './components/ModalResturant';




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
    { path: '/m', element: <ModalResturant/>},  


   ])
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
