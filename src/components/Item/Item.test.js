import Item from './item.js';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

describe('<Item/>', () => {
    const itemDetails = {id: '1', title: 'title', currency: 'ARS', amount: 10, freeShipping: true, picture: 'picture', address:'address'}
    const props = { history: { push : jest.fn()} } 

    const wrapper = shallow(
        <Item 
            id= {itemDetails.id}
            title= {itemDetails.title}
            currency= {itemDetails.currency}
            amount= {itemDetails.amount}
            freeShipping= {itemDetails.freeShipping}
            picture= {itemDetails.picture}
            address={itemDetails.address }
            props={props}
        />
    )

    describe( 'Check PropTypes', () => {
        it('should be ok', () => {
            const expectedProps = itemDetails;
            const propsError = checkPropTypes(Item.propTypes, expectedProps, 'props', Item.name)
            expect(propsError).toBeUndefined();
        })
    })
    

    it('should map title ok', () => {
        expect(wrapper.find(`[data-test='titleContainer']`).text() ).toBe(itemDetails.title)
    })

    it('should map address ok', () => {
        expect(wrapper.find(`[data-test='addressContainer']`).text() ).toBe(itemDetails.address)
    })

    it('should map price ok', () => {
        expect(wrapper.find(`[data-test='priceContainer']`).text() ).toContain(itemDetails.currency === 'ARS' ? '$': itemDetails.currency )
        expect(wrapper.find(`[data-test='priceContainer']`).text() ).toContain(itemDetails.amount)
    })

    it('should map Shipping ok', () => {
        expect(wrapper.find(`[data-test='shippingContainer']`)).not.toBeNull()
    })

    it('should map picture ok', () => {
        expect(wrapper.find(`[data-test='pictureContainer']`)).not.toBeNull()
    })

    describe('when item is clicked', () => {

        beforeEach(() => {
            wrapper.find(`[data-test='item']`).simulate('click')
        })

        it( 'should called props.history.push', () => {
            expect(props.history.push).toHaveBeenCalledWith(`/items/${itemDetails.id}`);
        })

    })

})