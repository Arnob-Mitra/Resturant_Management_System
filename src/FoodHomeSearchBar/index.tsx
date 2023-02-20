import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';

const FoodHomeSearch = () => {

  return (
   <body>
    <div className='FoodHomeSearch_SearchBox'>
     <form>
      <input type="text" placeholder='Search your food...'/>
      <button type='submit'><img className='FoodHomeSearch_Icon' src ="../../assets/search.png"/></button>

     </form>
    </div>
   </body>
  
    )
}
export default FoodHomeSearch;