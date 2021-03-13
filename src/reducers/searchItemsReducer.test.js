import { SEARCH_ITEMS_FAIL, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCEESS } from '../constants/searchItemsConstants';
import {searchItemsReducer} from './searchItemsReducer';


describe( 'Search Items Reducer', () => {
    
    it( 'Returns loading true, when no type is sent', () => {
        const newState = searchItemsReducer( {loading: true}, {} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns loading true, when received type is SEARCH_ITEMS_REQUEST', () => {
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_REQUEST} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns new state, when received type is SEARCH_ITEMS_SUCCEESS', () => {
        const items = [{
            id: '1',
            author : {
            name: "Martin",
            lastname: "seghezzo"
            },
            title : 'title',
            price : {
            currency: 'currency',
            amount: 'amount',
            },
            picture : 'thumbnail',
            condition : 'condition',
            free_shipping : 'shipping',
            address : 'address',  
            sold_quantity : 'sold_quantity',
            category_id : 'category_id',
            description : 'plain_text'
        },{
            id: '2',
            author : {
            name: "Martin",
            lastname: "seghezzo"
            },
            title : 'title2',
            price : {
            currency: 'currency2',
            amount: 'amount2',
            },
            picture : 'thumbnail2',
            condition : 'condition2',
            free_shipping : 'shipping2',
            address : 'address2',  
            sold_quantity : 'sold_quantity2',
            category_id : 'category_id2',
            description : 'plain_text2'
        }]
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_SUCCEESS, payload: items });
        expect(newState).toEqual({loading:false, items})
    })

    it( 'Returns new state, when received type is SEARCH_ITEMS_FAIL', () => {
        const error = 'Error Testing'
        const newState = searchItemsReducer( {loading: true}, {type: SEARCH_ITEMS_FAIL, payload: error} );
        expect(newState).toEqual({loading: false, error})
    })

})