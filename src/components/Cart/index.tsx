import React from 'react'
import product_card from '../../data/product_data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cart = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
       <CardContent>
       <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
            <Typography variant="body2" color="text.secondary">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
                <Button id='FoodCart__button' variant='contained'>Add to cart</Button>
            </Typography>
            </div>
        </div>
        </CardContent>

    )
    return (
        <div className="main_content">
            <h3>Choose your food...</h3>
            {listItems}
        </div>
    )
}
export default Cart;