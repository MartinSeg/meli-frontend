import { SEARCH_ITEMS_FAIL, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCEESS } from "../constants/searchItemsConstants"



export const searchItemsReducer = ( state = {loading: true}, action ) => {
    switch(action.type){
        case SEARCH_ITEMS_REQUEST :
            return { loading: true }
        case SEARCH_ITEMS_SUCCEESS:
            return { loading: false, items: action.payload}
        case SEARCH_ITEMS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}