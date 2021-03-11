import { FETCH_ITEM_DETAILS_FAIL, FETCH_ITEM_DETAILS_REQUEST, FETCH_ITEM_DETAILS_SUCCESS } from "../constants/itemDetailsConstants";


export const itemDetailsReducer = ( state = { loading: true }, action) => {
    switch(action.type){
        case FETCH_ITEM_DETAILS_REQUEST:
            return { loading : true }
        case FETCH_ITEM_DETAILS_SUCCESS:
            return { loading: false, itemInfo: action.payload}
        case FETCH_ITEM_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state 
    }
}