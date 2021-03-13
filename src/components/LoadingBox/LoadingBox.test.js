import LoadingBox from './LoadingBox';
import { shallow } from 'enzyme';

describe( '<LoadingBox/> ', () => {
    const wrapper = shallow(<LoadingBox/>);

    it( 'render loading OK', () => {
        expect(wrapper.find('div').hasClass('loading'))
        expect(wrapper.find('div').text()).toBe('Loading...')
    })

})