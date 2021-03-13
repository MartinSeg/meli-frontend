import React, { useEffect } from 'react'
import Item from '../Item'
import './Results.scss'
import LoadingBox from '../LoadingBox'
import { searchItemsAction } from '../../actions/SearchActions'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Results = (props) => {

    const searchProduct = props.location.search.split('=')[1];
    const dispatch = useDispatch();
    const { loading, items, error } = useSelector( state => state.searchItems )

    useEffect( () => {
        dispatch( searchItemsAction(searchProduct) )
    }, [searchProduct, dispatch])


    const renderResult = () => {
        return error 
            ? <ErrorMessage>{error}</ErrorMessage>
            :(
                <>
                    <div className='breadCrumb'>
                        ........
                    </div>
                    <div className='results'>  
                        <ul>  
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


