import React, { Fragment } from 'react'
import { useState } from 'react';
import { products } from '../../data';
import './index.scss';

const GenericCard = () => {
    const [counter, setCounter] = useState<Record<string, number>>({});
    const incrementHandler = (index: number) => {
        setCounter({ ...counter, [index]: (counter[index] ? counter[index] : 0) + 1 })
    }
    const decrementHandler = (index: number) => {
        setCounter({ ...counter, [index]: (counter[index] ? counter[index] : 1) - 1 })
    }

    console.log(counter)

    return (
        <main>
            {
                products.map((product, index) => (
                    <Fragment key={index} >
                        <div className='GenericCard__Screen'>
                              <div className='GenericCard__ProductDetails'>
                                <h3 className='GenericCard__Title' >{product.title}</h3>
                                <h4 className='GenericCard__Description'  >{product.description}</h4> 
                            </div> 
                            <img className="GenericCard__Image" src={product.thumb} alt="g" />
                             <h4 className="GenericCard__Price" >{product.price}</h4> 
                              <div className='GenericCard__button'>
                                <img className="GenericCard__DecrementIcon" src="../../assets/minusIcon.png" onClick={() => {decrementHandler(index) }}/>
                                <h5 className="GenericCard__CounterText">{counter[index] ? counter[index] : 0}</h5>
                                <img className="GenericCard__IncrementIcon" src="../../assets/addIcon.png" onClick={() => {incrementHandler(index) }} /> 
                             </div>
                            </div>
                    </Fragment>
                ))
            }
        </main>
    )
}

export default GenericCard;

