import './index.scss';
const FoodMainPage = () => {

    return (
        <main>
              <div className='FoodMainPage__Screen'>
                <div className='FoodMainPage__Card'>
                    <div className='FoodMainPage__Card_Details'>
                      <h3 className='FoodMainPage__Card_title'  >Food Delivary</h3>
                      <p className='FoodMainPage__Card_description'   >Best deals on your favourite</p>
                    </div>
                      <img className="FoodMainPage__Card_Image" src={"../../assets/delivary.png"} alt="pic" />  
               </div>
                
                <div className='FoodMainPage__Card'>
                    <div className='FoodMainPage__Card_Details'>
                      <h3 className='FoodMainPage__Card_title' >Exciting Promos</h3>
                      <p className='FoodMainPage__Card_description' >Taste and more....</p>
                    </div>
                      <img className="FoodMainPage__Card_Image" src={"../../assets/promo.png"} alt="pic" />  
                </div>

                <div className='FoodMainPage__Card'>
                    <div className='FoodMainPage__Card_Details'>
                      <h3 className='FoodMainPage__Card_title'>Dine In</h3>
                      <p className='FoodMainPage__Card_description' >Eat out and save more than 25%</p>
                    </div>
                      <img className="FoodMainPage__Card_Image" src={"../../assets/dineinn.jpg"} alt="pic" />  
                </div>

                <div className='FoodMainPage__Card'>
                    <div className='FoodMainPage__Card_Details'>
                      <h3 className='FoodMainPage__Card_title'>Pick-up</h3>
                      <p className='FoodMainPage__Card_description'>Take-way in 15 mins</p>
                    </div>
                      <img className="FoodMainPage__Card_Image" src={"../../assets/pickup.jpg"} alt="pic" />  
                </div>
           </div>
     </main>

    )

}

export default FoodMainPage;