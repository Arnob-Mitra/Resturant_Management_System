import './index.scss';
const FoodMainPage = () => {

  return (
    <main>
      <div className='FoodMainPage__Screen'>
        <div className='FoodMainPage__Card'>
          <div className='FoodMainPage__Card_Details'>
            <h3 className='FoodMainPage__Card_title'  >Food Delivary</h3>
            <p className='FoodMainPage__Card_description'>Best deals on your favourite</p>
          </div>
          <img className="FoodMainPage__Card_Image" src={"../../assets/delivary.png"} loading="lazy" alt="pic" />
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
            <h3 className='FoodMainPage__Card_title' >Discount Coupone</h3>
            <p className='FoodMainPage__Card_description' >Up to 50% discount...</p>
          </div>
          <img className="FoodMainPage__Card_Image" src={"../../assets/discount.png"} alt="pic" />
        </div>

        <div className='FoodMainPage__Card3'>
          <div className='FoodMainPage__Card_Details'>
            <h3 className='FoodMainPage__Card_title'>Dine In</h3>
            <p className='FoodMainPage__Card_description' >Eat out and save more than 25%</p>
            <img className="FoodMainPage__Card_Image3" src={"../../assets/dineein.jpg"} alt="pic" />
          </div>

        </div>
      </div>
    </main>

  )

}

export default FoodMainPage;