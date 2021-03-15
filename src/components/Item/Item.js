import React from 'react'
import './Item.scss'
import Shipping from '../../assets/ic_shipping.png'
import PropTypes from 'prop-types'

const Item = ({id, title, currency, amount, freeShipping, picture, address, props}) => {

    const handleOnClick = () => {
        props.history.push(`/items/${id}`)
    }

    return (
        <div className='item' onClick={handleOnClick} data-test='item'>
            <div className='item-details'>
                <div>
                    <img 
                        className='item-details-image'
                        src={picture} 
                        alt='Product'
                        data-test='pictureContainer'
                    />
                </div>

                <div className='item-description'>
                    <div className='item-description-price'>
                        <span data-test='priceContainer'>
                            {currency === 'ARS' ? '$' : currency} {amount}
                        </span>
                        <span data-test='shippingContainer'>
                            {freeShipping && <img className='item-details-shipping' src={Shipping} alt='Shipping'/>}
                        </span>
                    </div>
                    <span className='item-description-text' data-test='titleContainer'>
                        {title}
                    </span>
                    <span>
                        ...
                    </span>
                </div>
            </div>
            <div className='item-location' data-test='addressContainer'>
                <span>
                    {address}
                </span>
            </div>             
        </div>
    )
}

export default Item


Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    freeShipping: PropTypes.bool,
    picture: PropTypes.string.isRequired,
    address: PropTypes.string,
    props: PropTypes.object,
};

