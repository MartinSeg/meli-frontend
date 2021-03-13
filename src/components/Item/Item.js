import React from 'react'
import './Item.scss'
import Shipping from '../../assets/ic_shipping.png'


const Item = ({id, title, currency, amount, freeShipping, picture, address, props}) => {

    const handleOnClick = () => {
        props.history.push(`/items/${id}`)
    }

    return (
        <div className='item' onClick={handleOnClick}>
            <div className='item-details'>
                <div>
                    <img 
                        className='item-details-image'
                        src={picture} 
                        alt='Product'
                    />
                </div>

                <div className='item-description'>
                    <div className='item-description-price'>
                        <span >
                            {currency === 'ARS' ? '$' : currency} {amount}
                        </span>
                        {freeShipping && <img className='item-details-shipping' src={Shipping} alt='Shipping'/>}
                    </div>
                    <span className='item-description-text'>
                        {title}
                    </span>
                    <span>
                        ...
                    </span>
                </div>
            </div>
            <div className='item-location'>
                <span>
                    {address}
                </span>
            </div>             
        </div>
    )
}

export default Item
