import Header from './Header';
import { shallow } from 'enzyme';

describe( '<Header/>', () => { 
    const history = { push : jest.fn()}
    const inputValue = 'testing'
    const event = { target: {value: inputValue}}
    const event2 = { target: {}, preventDefault: () => {} }
    const wrapper = shallow(<Header history={history}/>);

    it('renders OK', () => {
        expect(wrapper.find('button')).not.toBeNull();
        expect(wrapper.find('button')).toHaveLength(1);
    });

    describe( 'When input value changes,' , () => {
        beforeEach( () => {
            wrapper.find('input').simulate('change', { target: { value: 'ipod' } })
        })
        
        it('its value does it in the same way ', () => {
            expect(wrapper.find('input').at(0).prop('value')).toEqual('ipod')
        })
    })

    describe( 'When input changes,' , () => {
        beforeEach( () => { 
            wrapper.find('input').simulate('change', event)
        })

        describe( 'and form is submitted,' , () => {
            beforeEach( () => { 
                wrapper.find('form').simulate('submit', event2)
            })
    
            it( 'history.push is called' , async () => {
                expect(history.push).toHaveBeenCalledWith(`/items?search=${inputValue}`);
            })
        })
    })
})


