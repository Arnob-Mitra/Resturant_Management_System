import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FoodMainFooter from './components/FoodHomeFooter';
import GenericCard from './components/GenericCard';
import BasicInfo from './components/BasicInfo';
import LogIn from './components/LogIn';
import SignIn from './components/SignUp';
import FoodMainPage from './Page/FoodMainPage';
import FoodHomeSearch from './FoodHomeSearchBar';
import GenericHeader from './components/GenericHeader';
import RMSHome from './components/RMSHome';
import RMSTable from './components/RMSTable';


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <GenericCard /> }, 
    { path: '/s', element: <SignIn/> },  
    { path: '/l', element: <LogIn/> },  
    { path: '/b', element: <BasicInfo/> },  
    { path: '/rmshome', element: <RMSHome/> },  

   ])
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
