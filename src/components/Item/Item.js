import React from 'react'
import './Item.scss'
import Shipping from '../../assets/ic_shipping.png'


const Item = ({currency, amount, decimals, freeShipping }) => {
    return (
        <div className='item'>
            <div className='item-details'>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU' alt='Product'/>
                </div>

                <div className='item-description'>
                    <div className='item-description-price'>
                        <span >
                            {currency} {amount},{decimals}
                        </span>
                        {freeShipping && <img src={Shipping} alt='Shipping'/>}
                    </div>
                    <span className='item-description-text'>
                        Apple iPod Touch 5g 16gb Negro, igual a Nuevo
                    </span>
                    <span>
                        Completo Unico!!
                    </span>
                </div>
            </div>
            <div className='item-location'>
                <span>
                    Capital Federal
                </span>
            </div>             
        </div>
    )
}

export default Item
