import React, { useEffect } from 'react'
import Item from '../Item'
import './Results.scss'
import LoadingBox from '../LoadingBox'
import { searchItemsAction } from '../../actions/SearchActions'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

// const mockItems = [ 
//     {
//         id: "1",
//         title: "hola",
//         price: {
//             currency: "$",
//             amount: 10,
//             decimals: 90
//         },
//         picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
//         condition: "paid",
//         free_shipping: false,   
//     },
//     {
//         id: "2",
//         title: "hola2",
//         price: {
//             currency: "$",
//             amount: 10,
//             decimals: 90
//         },
//         picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
//         condition: "paid",
//         free_shipping: true,   
//     },
//     {
//         id: "3",
//         title: "hola3",
//         price: {
//             currency: "$",
//             amount: 10,
//             decimals: 90
//         },
//         picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
//         condition: "paid",
//         free_shipping: true,   
//     },
//     {
//         id: "4",
//         title: "hola4",
//         price: {
//             currency: "$",
//             amount: 10,
//             decimals: 90
//         },
//         picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
//         condition: "paid",
//         free_shipping: true,   
//     }
// ]


const Results = (props) => {

    const searchProduct = props.location.search.split('=')[1];
    const dispatch = useDispatch();
    const { loading, items, error } = useSelector( state => state.searchItems )

    useEffect( () => {
        dispatch( searchItemsAction(searchProduct) )
    }, [searchProduct, dispatch])

    return (
        <>
        {loading
            ? <LoadingBox /> 
            : error 
                ? <ErrorMessage>{error}</ErrorMessage>
                :(
                <>
                    <div className='breadCrum'>
                        ........
                    </div>
                    <div className='results'>  
                        <ul>  
                            { items.map( item => (
                                <li key={item.id}>
                                    <Item 
                                        currency={item.price.currency}
                                        amount={item.price.amount}
                                        decimals={item.price.decimals}
                                        freeShipping={item.free_shipping}
                                        picture={item.picture}
                                    />
                                </li>
                            ))}
                        </ul> 
                    </div>
                </>
            )
        }
        </>      
    )
}

export default Results


