import React from 'react'
import product_card from '../../data/product_data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.scss';



const Cart = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <CardContent>
            <CardMedia className="card_img">
                <img src={item.thumb}
                height ="120" />
            </CardMedia>
            <div className="Resturant_product_head">
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                      <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                      <Typography variant="body1" color="rgb">{item.price}</Typography>
                    <Button id='FoodCart__button' variant='contained'>Add to cart</Button>
            
            </div>


        </CardContent>

    )

    return (
        <div className="main_content">

            {listItems}
        </div>
    )
}
export default Cart;