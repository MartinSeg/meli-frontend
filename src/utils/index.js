import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../store';

export const testStore = () => store

export const testItems = {
    author : {
        name: "Martin",
        lastname: "seghezzo"
    },
    categories: ['c1', 'c2', 'c3'],
    items:[{
        id: '1',
        title : 'title',
        price : {
            currency: 'currency',
            amount: 1,
        },
        picture : 'thumbnail',
        condition : 'new',
        free_shipping : true,
    },{
        id: '2',
        title : 'title2',
        price : {
            currency: 'currency2',
            amount: 1,
        },
        picture : 'thumbnail2',
        condition : 'new',
        free_shipping : true,
    }],
    breadCrumb: ['c1', 'c2', 'c3']
}
   
export const testItemDetails = {
    author : {
        name: "Martin",
        lastname: "seghezzo"
    },
    item: {
        id: '2',
        title : 'title2',
        price : {
            currency: 'currency2',
            amount: 1,
        },
        picture : 'thumbnail2',
        condition : 'new',
        free_shipping : true,
        sold_quantity : 'sold_quantity',
        description : 'plain_text'
    }
}

const TestProvider = ({store, children}) => <Provider store={store}>{children}</Provider>

export function testRender(ui, { store }) {
    return render(<TestProvider store={store}>{ui}</TestProvider>)
}

export function makeTestStore(opts = {}) {
    const store = testStore(opts)
    const origDispatch = store.dispatch
    store.dispatch = jest.fn(origDispatch)
    return store
}

