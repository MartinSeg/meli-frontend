import React, { useEffect } from 'react'
import Item from '../Item'
import './Results.scss'
import LoadingBox from '../LoadingBox'
import { searchItemsAction } from '../../actions/SearchActions'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

const Results = (props) => {

    const searchProduct = props.location.search.split('=')[1];
    const dispatch = useDispatch();
    const { loading, items, error, breadCrumb } = useSelector( state => state.searchItems )

    useEffect( () => {
        dispatch( searchItemsAction(searchProduct) )
    }, [searchProduct, dispatch])


    const renderResult = () => {
        return error 
            ? <ErrorMessage>{error}</ErrorMessage>
            :(
                <>
                    <BreadCrumb breadCrumb={breadCrumb} />
                    <div className='results'>  
                        <ul data-testid='itemList'>   
                            { items.map( item => (
                                <li key={item.id}>
                                    <Item 
                                        id={item.id}
                                        title={item.title}
                                        currency={item.price.currency}
                                        amount={item.price.amount}
                                        freeShipping={item.free_shipping}
                                        picture={item.picture}
                                        address={item.address}
                                        props={props}
                                    />
                                </li>
                            ))}
                        </ul> 
                    </div>
                </>
            )
    }

    return (
        <>
            {loading
                ? <LoadingBox /> 
                : renderResult()
            }
        </>      
    )
}

export default Results


