import React, { useEffect } from 'react'
import Item from '../Item'
// import axios from 'axios'
import './Results.scss'

const mockItems = [ 
    {
        id: "1",
        title: "hola",
        price: {
            currency: "$",
            amount: 10,
            decimals: 90
        },
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
        condition: "paid",
        free_shipping: true,   
    },
    {
        id: "2",
        title: "hola2",
        price: {
            currency: "$",
            amount: 10,
            decimals: 90
        },
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
        condition: "paid",
        free_shipping: true,   
    },
    {
        id: "3",
        title: "hola3",
        price: {
            currency: "$",
            amount: 10,
            decimals: 90
        },
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
        condition: "paid",
        free_shipping: true,   
    },
    {
        id: "4",
        title: "hola4",
        price: {
            currency: "$",
            amount: 10,
            decimals: 90
        },
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYSTpaHNx15fmP9aVxajM6sCYsGRij5NKIQ&usqp=CAU",
        condition: "paid",
        free_shipping: true,   
    }
]


const Results = () => {

    useEffect( () => {
        // const callService = async () => {
        //     try{
        //         const data = await axios.get('http://localhost:5000')
        //         console.log(data)
        //     }catch(err){
        //         console.log(err.response)
        //     }
        // }

        // callService();

    }, [])

    return (
        <div className='results'>
            <p>
                ........
            </p>
           <div className='results-main'>
               { mockItems.map( item => (
                   <Item/>
               ))}
           </div>
        </div>
    )
}

export default Results
