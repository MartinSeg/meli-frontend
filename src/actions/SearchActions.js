import { SEARCH_ITEMS_FAIL, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCEESS } from "../constants/searchItemsConstants"
import axios from 'axios'

export const searchItemsAction = (searchProduct) => async (dispatch) => {

    dispatch({ type: SEARCH_ITEMS_REQUEST })

    try{
        const {data} = await axios.get(`http://localhost:5000/api/items?q=${searchProduct}`)

        console.log(data)

        dispatch({ type: SEARCH_ITEMS_SUCCEESS, payload: data.items})

    }catch(err){

        dispatch({ type: SEARCH_ITEMS_FAIL, payload: err.response.data.message})
    }
}