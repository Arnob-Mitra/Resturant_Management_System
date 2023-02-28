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
                    <a href="/share"> <img className="GenericCardHeader__ShareIcon" src ="../../assets/sharenew.png"/></a>
                </div>
            </header>

                <h1 className='GenericCardHeader__ResturantName'>Resturant Name</h1>
                <div className='GenericCardHeader__Resturant'>
                <div className='GenericCardHeader__location'>Location</div>
                <p className='GenericCardHeader__Review'>Reviews & info</p>
                 <div className='GenericCardHeader__rating'>
                    <p>Rating</p>
                    <input type="radio" name='rating1' id='rating1'></input>
                    <label className='fa fa-star'></label>
                    <input type="radio" name='rating1' id='rating1'></input>
                    <label className='fa fa-star'></label>
                    <input type="radio" name='rating1' id='rating1'></input>
                    <label className='fa fa-star'></label>
                    <input type="radio" name='rating1' id='rating1'></input>
                    <label className='fa fa-star'></label>
                    <input type="radio" name='rating1' id='rating1'></input>
                    <label className='fa fa-star'></label>
                </div>
                <p className='GenericCardHeader__MoreImages'>More Images</p>
            </div>
           <main id='GenericCardHeader__MenuCard'>
                {
                 products.map((product, index) => (
                        <Fragment key={index} >
                            <div className='GenericCard__Screen'>
                                <div className='GenericCard__ProductDetails'>
                                    <h2 className='GenericCard__Title' >{product.title}</h2>
                                    <h3 className='GenericCard__Description'  >{product.description}</h3>
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
                <h3 className='footer-content__viewyourcart'>View your cart &nbsp; &nbsp; &nbsp; &nbsp; Tk. 200 </h3>
            </footer>
        </Fragment>
    )
}

export default GenericCard;

