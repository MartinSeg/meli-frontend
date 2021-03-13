// import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemDetailsAction } from '../../actions/ItemDetailsActions'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadingBox from '../LoadingBox'
import './ItemDetails.scss'

const ItemDetails = (props) => {
    const itemId = props.match.params.id;
    const dispatch = useDispatch();
    const { loading, error, item, breadCrumb } = useSelector(state => state.itemDetails)

    useEffect( () => {
        dispatch( itemDetailsAction(itemId))  
    }, [dispatch, itemId ] )

    const renderResult = () => {
        const {condition, sold_quantity, title, price:{currency, amount} , picture, description} = item
        return (
            <>
                <BreadCrumb breadCrumb={breadCrumb} />
                <div className='results'> 
                    <div className='item_info'>
                        <div>
                            <img
                                className='item_info_picture' 
                                src={picture} 
                                alt='Item' 
                            />
                            <div className='item_description'>
                                <p className='item_description_title'> Descripcion del producto</p>
                                <p className='item_description_details'> {description} </p>
                            </div> 
                        </div>
                        <div className='item_info_data'>
                            <span className='item_sales'> { condition} - {sold_quantity} Vendidos</span>
                            <span className='item_title'> { title }</span>
                            <span className='item_price'> 
                                { currency === 'ARS' ? '$' : currency} &nbsp;   
                                { amount.toFixed(2) } 
                            </span>
                            <button className='item_buy_button'> Comprar </button>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
    
    const renderContent = () => {
        return error 
        ? <ErrorMessage>{error}</ErrorMessage>
        : renderResult()
    }

    return (
        <>
            {loading
                ? <LoadingBox /> 
                : renderContent()
            }
        </>
    )
}

export default ItemDetails
