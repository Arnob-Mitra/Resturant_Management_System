import React from 'react'
import { useState } from 'react';
import { products } from '../../data';
import './index.scss';
import { Button, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';


const GenericCard = () => {
    const [counter, setCounter] = useState(0);
    const incrementHandler = () => {
        setCounter((val) => val + 1)
    }
    const decrementHandler = () => {
        setCounter((val) => val - 1)
    }


    return (
        <main>
            {
                products.map((product, index) => (

                    <div className='GenericCard__Screen'>
                        <div className='GenericCard__ProductDetails'>
                        <Typography className='GenericCard__Title' variant="body1" key={index} >{product.title}</Typography>
                        <Typography className='GenericCard__Description' variant="body2" key={index} >{product.description}</Typography>
                    </div>    
                        <img className="GenericCard__Image" src={product.thumb} alt="g"/>
                        <Typography className="GenericCard__Price" variant="body2" >{product.price}</Typography>
                        <div className="GenericCard__button">
                            <RemoveCircleRoundedIcon className="GenericCard__Icon" onClick={decrementHandler} />
                            <Typography className="grid-item">{counter}</Typography>
                            <AddCircleRoundedIcon className="GenericCard__Icon" onClick={incrementHandler} />
                            
                        </div>

                    </div>



                ))
            }
        </main>
    )

}

export default GenericCard;