import React , {useState}from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const FoodHomeSearch = () => {

  return (
    <nav className='FoodHomeSearch__navbar'>
      <h3 className='FoodHomeSearch__logo'>Food-Hub</h3>
      <ul className='FoodHomeSearch__nav-links'>
      
        <div>
          <li>
            <Link to="/l" className='FoodHomeSearch__SignIn'>Sign in</Link>
          </li>
          <li>
            <Link to="/s" className='FoodHomeSearch_Menu'>Menu</Link>
          </li>
        </div>
        <li className='FoodHomeSearch_searchBox'>
          <input type={"search"} placeholder="Search your food..."/>
          <span className='fas fa-search'></span>
        </li>
      </ul>
       
    </nav>
  );
}
export default FoodHomeSearch;