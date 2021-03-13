import ErrorMessage from './ErrorMessage';
import { shallow } from 'enzyme';

describe( '<Error Message/> ', () => {
    const children = 'Testing Error Message Component'
    const wrapper = shallow(<ErrorMessage children={children}/>);

    it( 'render message OK', () => {
        expect(wrapper.find('div').text()).toBe(children)
    })

})