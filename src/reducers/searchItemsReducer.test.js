import { SEARCH_ITEMS_FAIL, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCESS } from '../constants/searchItemsConstants';
import { searchItemsReducer} from './searchItemsReducer';
import { testItems } from '../utils'

describe( 'Search Items Reducer', () => {
    
    it( 'Returns loading true, when no type is sent', () => {
        const newState = searchItemsReducer( {loading: true}, {} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns loading true, when received type is SEARCH_ITEMS_REQUEST', () => {
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_REQUEST} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns new state, when received type is SEARCH_ITEMS_SUCCESS', () => {
        const { items, breadCrumb }  = testItems;
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_SUCCESS, payload: {items, breadCrumb }} );
        expect(newState).toEqual({loading:false, items, breadCrumb})
    })

    it( 'Returns new state, when received type is SEARCH_ITEMS_FAIL', () => {
        const error = 'Error Testing'
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_FAIL, payload: error} );
        expect(newState).toEqual({loading: false, error})
    })
})