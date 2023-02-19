import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FoodMainFooter from './components/FoodHomeFooter';
import GenericCard from './components/GenericCard';
import LogIn from './components/NewAccount/LogIn';
import SignIn from './components/NewAccount/SignUp';
import FoodMainPage from './components/Page/FoodMainPage';
import FoodHomeSearch from './FoodHomeSearchBar';


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <FoodHomeSearch/> },
    { path: '/s', element: <GenericCard /> },
    { path: '/l', element: <FoodMainPage/> },  
    { path: '/r', element: <FoodMainFooter/> },  
    { path: '/a', element: <SignIn/> },  
    { path: '/b', element: <LogIn/> },  



   ])
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
