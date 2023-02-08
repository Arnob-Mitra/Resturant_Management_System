import React, { Fragment } from 'react'
import { useState } from 'react';
import { products } from '../../data';
import './index.scss';
import { Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';



const GenericCard = () => {
    const [counter, setCounter] = useState<Record<string, number>>({});
    const incrementHandler = (index: number) => {
        setCounter({...counter, [index]: (counter[index] ? counter[index] : 0) + 1})
    }
    const decrementHandler = (index: number) => {
        setCounter({...counter, [index]: (counter[index] ? counter[index] : 1) - 1})
        

    }

    console.log(counter)

    return (
        <main>
            {
                products.map((product, index) => (
                    <Fragment key={index} >
                        <div className='GenericCard__Screen'>
                            <div className='GenericCard__ProductDetails'>
                                <Typography className='GenericCard__Title' variant="body1" >{product.title}</Typography>
                                <Typography className='GenericCard__Description' variant="body2" >{product.description}</Typography>
                            </div>
                            <img className="GenericCard__Image" src={product.thumb} alt="g" />
                            <Typography className="GenericCard__Price" variant="body2" >{product.price}</Typography>
                            <div className="GenericCard__button">
                                <RemoveCircleRoundedIcon className="GenericCard__Icon" onClick={() => { decrementHandler(index) }} />
                                <Typography className="grid-item">{counter[index] ? counter[index] : 0}</Typography>
                                <AddCircleRoundedIcon className="GenericCard__Icon" onClick={() => { incrementHandler(index) }} />
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </main>
    )

}

export default GenericCard;

