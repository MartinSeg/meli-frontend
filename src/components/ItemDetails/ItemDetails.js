import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemDetailsAction } from '../../actions/ItemDetailsActions'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadingBox from '../LoadingBox'
import './ItemDetails.scss'

const ItemDetails = (props) => {
    const [ breadCrumb, setBreadCrumb ] = useState('')
    const itemId = props.match.params.id;
    const dispatch = useDispatch();
    const { loading, error, itemInfo } = useSelector(state => state.itemDetails)

    useEffect( () => {
        dispatch( itemDetailsAction(itemId))  
    }, [dispatch, itemId ] )

    useEffect( () => {
        const fetchBreadCrumb  = async () => {
            const {data} = await axios.get(`https://api.mercadolibre.com/categories/${itemInfo.item.category}`);
            const { path_from_root } = data
            const breadCrumbCategories = path_from_root.map( x => x.name)
            setBreadCrumb(breadCrumbCategories);
        }

        if(itemInfo){
            fetchBreadCrumb();
        }
    }, [itemInfo])

    return (
        <>
            {loading
                ? <LoadingBox /> 
                : error 
                    ? <ErrorMessage>{error}</ErrorMessage>
                    :(
                        <>
                            <div className='breadCrumb'>
                                <ul>
                                    {breadCrumb && breadCrumb.map( category => (
                                        <li>
                                            <span className='breadCrumb_category'> {category} </span>
                                            <span className='breadCrumb_sign'> {'>'} </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='results'> 
                                <div className='item_info'>
                                    <div>
                                        <img
                                            className='item_info_picture' 
                                            src={itemInfo.item.picture} 
                                            alt='Item' 
                                        />
                                        <div className='item_description'>
                                            <p className='item_description_title'> Descripcion del producto</p>
                                            <p className='item_description_details'> {itemInfo.item.description} </p>
                                        </div> 
                                    </div>
                                    <div className='item_info_data'>
                                        <span className='item_sales'> {itemInfo.item.condition} - {itemInfo.item.sold_quantity} Vendidos</span>
                                        <span className='item_title'> { itemInfo.item.title }</span>
                                        <span className='item_price'> 
                                            { itemInfo.item.price.currency === 'ARS' && '$'} &nbsp;   
                                            { itemInfo.item.price.amount } 
                                        </span>
                                        <button className='item_buy_button'> Comprar </button>
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default ItemDetails
