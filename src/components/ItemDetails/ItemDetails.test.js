import { testItemDetails, testRender, testStore } from "../../utils";
import ItemDetails from './ItemDetails'
import * as reactRedux from 'react-redux' 
import { mapConditionResult } from "../../utils/itemDetailsMapCondition";

describe("ItemDetails", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    let store;
    let mockDispatch

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()  
        store = testStore();
        mockDispatch = jest.fn()
        const mockStore = {loading: false, error: false, breadCrumb: ['c1', 'c2', 'c3'], item: testItemDetails.item}
        useDispatchMock.mockReturnValue(mockDispatch)
        useSelectorMock.mockReturnValue(mockStore)      
    })

    it("should not Dispatch action before first Load", () => {
        expect(mockDispatch).not.toHaveBeenCalled()
    });

    it("should Dispatch action on first Load", () => {
        testRender(<ItemDetails match={{params: {id: '1'}}} />, { store })
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    });

    it('Should render correctly store items in screen', () => {
        const {condition, sold_quantity, title, price:{currency, amount} , picture, description} = testItemDetails.item;
        const { getByTestId } = testRender(<ItemDetails match={{params: {id: '1'}}} />, { store })
        
        expect(getByTestId('descriptionContainer').textContent).toContain(description);
        expect(getByTestId('conditionAndSoldQContainer').textContent).toContain(mapConditionResult(condition));
        expect(getByTestId('conditionAndSoldQContainer').textContent).toContain(sold_quantity);
        expect(getByTestId('titleContainer').textContent).toContain(title);
        expect(getByTestId('priceContainer').textContent).toContain(currency);
        expect(getByTestId('priceContainer').textContent).toContain(amount);
        expect(getByTestId('itemIMG').src).toContain(picture);
    })
});

