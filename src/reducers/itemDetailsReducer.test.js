import { FETCH_ITEM_DETAILS_REQUEST, FETCH_ITEM_DETAILS_SUCCESS, FETCH_ITEM_DETAILS_FAIL } from '../constants/itemDetailsConstants';
import {itemDetailsReducer} from './itemDetailsReducer';


describe( 'Item Details Reducer', () => {
    
    it( 'Returns loading true, when no type is sent', () => {
        const newState = itemDetailsReducer( {loading: true}, {} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns loading true, when received type is FETCH_ITEM_DETAILS_REQUEST', () => {
        const newState = itemDetailsReducer( {loading: true}, {type: FETCH_ITEM_DETAILS_REQUEST} );
        expect(newState).toEqual({loading: true})
    })

    it( 'Returns new state, when received type is FETCH_ITEM_DETAILS_SUCCESS', () => {
        const item = {
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
        }
        const breadCrumb = ['category1', 'category2', 'category3']
        const newState = itemDetailsReducer( {loading: true}, {type: FETCH_ITEM_DETAILS_SUCCESS, payload: {item, breadCrumb} });
        expect(newState).toEqual({loading:false, item, breadCrumb})
    })

    it( 'Returns new state, when received type is FETCH_ITEM_DETAILS_FAIL', () => {
        const error = 'Error Testing'
        const newState = itemDetailsReducer( {loading: true}, {type: FETCH_ITEM_DETAILS_FAIL, payload: error} );
        expect(newState).toEqual({loading: false, error})
    })

})