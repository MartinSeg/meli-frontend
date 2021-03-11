import { FETCH_ITEM_DETAILS_FAIL, FETCH_ITEM_DETAILS_REQUEST, FETCH_ITEM_DETAILS_SUCCESS } from "../constants/itemDetailsConstants"
import axios from 'axios'

export const itemDetailsAction = ( id ) => async (dispatch) => {
    dispatch({ type: FETCH_ITEM_DETAILS_REQUEST})

    try{
        const { data } = await axios.get(`http://localhost:5000/api/items/${id}`)

        dispatch({type: FETCH_ITEM_DETAILS_SUCCESS, payload: data})
        
    }catch(err){
        dispatch({type: FETCH_ITEM_DETAILS_FAIL, payload: err.response.data.message})
    }
}