import React from 'react'
import { useState } from 'react';
import product_card from '../../data/product_data';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './index.scss';
import { Button } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { RemoveShoppingCart } from '@mui/icons-material';

const GenericCard = () => {
    const [counter, setCounter] = useState(0);
    const incrementHandler = () => {
        setCounter((val) => val + 1)
    }

    const decrementHandler = () => {
        setCounter((val) => val - 1)
    }
    console.log(product_card);
    const listItems = product_card.map((item) =>

        <CardContent id="GenericCard__head">
           <CardMedia >
                <img className="GenericCard__img" src={item.thumb} />
            </CardMedia>
            <Typography variant="h5" component="div">
                {item.title}
            </Typography>
            <br />
            <Typography className="GenericCard__description" variant="subtitle2" >{item.description}</Typography>
            <Typography className="GenericCaed__Price" variant="body1" >{item.price}</Typography>

            <div className="GenericCard__button">
                <Button className="GenericCard__Icon" startIcon={<RemoveShoppingCart/>} onClick={decrementHandler}>-</Button>
                <Typography className="grid-item">{counter}</Typography>
                <Button className="GenericCard__Icon" startIcon={<AddShoppingCart/>} onClick={incrementHandler}>+</Button>
            </div>

        </CardContent>



    )


    


    return (

        <div className="main_content">

            {listItems}

        </div>
    )
}
export default GenericCard;