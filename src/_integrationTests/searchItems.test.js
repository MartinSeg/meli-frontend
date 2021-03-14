import moxios from 'moxios'
import { testStore, testItems } from '../utils'
import { searchItemsAction } from '../actions/SearchActions'


describe( 'Search Items', () => {

    beforeEach( () => { 
        moxios.install()
    })

    afterEach( () => {
        moxios.uninstall()
    })

    it('Updated store ok', () => {
        const expectedItems = testItems.items;
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {items: expectedItems}
            })
        })

        return store.dispatch(searchItemsAction())
        .then( () => {
            const newState = store.getState();
            expect(newState.searchItems.items).toBe(expectedItems)
        })

    })
})