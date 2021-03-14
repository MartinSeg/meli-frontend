import { SEARCH_ITEMS_FAIL, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCESS } from "../constants/searchItemsConstants"

export const searchItemsReducer = ( state = {loading: true}, action ) => {
    switch(action.type){
        case SEARCH_ITEMS_REQUEST :
            return { loading: true }
        case SEARCH_ITEMS_SUCCESS:
            const { items, breadCrumb } = action.payload
            return { loading: false, items, breadCrumb}
        case SEARCH_ITEMS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}