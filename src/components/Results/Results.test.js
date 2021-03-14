import { testItems, testRender, testStore } from "../../utils";
import Results from './Results'
import * as reactRedux from 'react-redux' 


describe("ItemDetails", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    let store;
    let mockDispatch
    let mockStore

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()  
        store = testStore();
        mockDispatch = jest.fn()
        mockStore = {loading: false, error: false, items: testItems.items}
        useDispatchMock.mockReturnValue(mockDispatch)
        useSelectorMock.mockReturnValue(mockStore)      
    })

    it("should not Dispatch action before first Load", () => {
        expect(mockDispatch).not.toHaveBeenCalled()
    });

    it("should Dispatch action on first Load", () => {
        testRender(<Results location={{search: 'q=1'}}/>, { store })
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    });

    it( 'should render all items in store', () => {
        const { getByTestId } = testRender(<Results location={{search: 'q=1'}}/>, { store })
        expect( getByTestId('itemList').children.length ).toBe(mockStore.items.length)
    })
})