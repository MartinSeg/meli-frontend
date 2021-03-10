import React, { useEffect, useState } from 'react'
import Item from '../Item'
import axios from 'axios'
import './Results.scss'
import LoadingBox from '../LoadingBox'

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

    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState({})
    const searchProduct = props.location.search.split('=')[1];

    useEffect( () => {
        const callService = async () => {

            try{
                const {data} = await axios.get(`http://localhost:5000/api/items?q=${searchProduct}`)
                console.log(data)
                setData(data);
                setLoading(false);

            }catch(err){
                console.log(err.response.data.message)
            }
        }

        callService();

    }, [searchProduct])

    return (
        <>
        {loading
            ? <LoadingBox /> 
            :(
                <>
                    <div className='breadCrum'>
                        ........
                    </div>
                    <div className='results'>  
                        <ul>  
                            { data.items.map( item => (
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


