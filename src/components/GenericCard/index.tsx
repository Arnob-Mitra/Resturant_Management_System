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

        <Fragment>
            <header>
                <div className='GenericCardHeader__Screen'>
                    <img className="GenericCardHeader__Image" src='../../assets/frontimage.jpg' loading="lazy" alt='' />
                </div>
            </header>

            <div className='GenericCardHeader__Rating'>
                <h3 className='GenericCardHeader__ResturantName'>Resturant Name</h3>
            </div>


            <main>
                {
                    products.map((product, index) => (
                        <Fragment key={index} >
                            <div className='GenericCard__Screen'>
                                <div className='GenericCard__ProductDetails'>
                                    <h3 className='GenericCard__Title' >{product.title}</h3>
                                    <h4 className='GenericCard__Description'  >{product.description}</h4>
                                </div>
                                <img className="GenericCard__Image" src={product.thumb} loading="lazy" alt='' />
                                <h4 className="GenericCard__Price" >{product.price}</h4>
                                <div className='GenericCard__button'>
                                    <img className="GenericCard__DecrementIcon" src="../../assets/minusIcon.png" alt='' onClick={() => { decrementHandler(index) }} />
                                    <h5 className="GenericCard__CounterText">{counter[index] ? counter[index] : 0}</h5>
                                    <img className="GenericCard__IncrementIcon" src="../../assets/addIcon.png" alt='' onClick={() => { incrementHandler(index) }} />
                                </div>
                            </div>
                        </Fragment>

                    ))
                }
            </main>
            <footer className="GenericCard__footer-content">
                <div className='footer-content__Price'>
                    <h3 className='footer-content__viewyourcart'>View your cart &nbsp; &nbsp; &nbsp; &nbsp; Tk. 200 </h3>
                </div>
            </footer>
        </Fragment>
    )
}

export default GenericCard;

