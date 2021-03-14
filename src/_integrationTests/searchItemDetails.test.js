import moxios from 'moxios'
import { testStore, testItemDetails } from '../utils'
import { itemDetailsAction } from '../actions/itemDetailsActions'


describe( 'Search Item Details', () => {

    beforeEach( () => { 
        moxios.install()
    })

    afterEach( () => {
        moxios.uninstall()
    })

    it('Updated store ok', () => {
        const itemDetails  = testItemDetails;
        const breadCrumb = ['b1', 'b2', 'b3', 'b4']
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {item: itemDetails, breadCrumb: breadCrumb}
            })
        })

        return store.dispatch(itemDetailsAction())
        .then( () => {
            const newState = store.getState();
            expect(newState.itemDetails.item).toBe(itemDetails)
        })

    })
})