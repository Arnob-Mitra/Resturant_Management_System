import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenericCard from './components/GenericCard';
import FoodMainPage from './components/Page/FoodMainPage';
import FoodHomeSearch from './FoodHomeSearchBar';


function App() {
  const router = createBrowserRouter([
    { path: '/s', element: <FoodHomeSearch/> },
    { path: '/', element: <GenericCard /> },
    { path: '/l', element: <FoodMainPage/> },  
  ])
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
