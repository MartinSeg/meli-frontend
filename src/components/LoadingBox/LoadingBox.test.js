import LoadingBox from './LoadingBox';
import { shallow } from 'enzyme';

describe( '<LoadingBox/> ', () => {
    const wrapper = shallow(<LoadingBox/>);

    it( 'render loading OK', () => {
        expect(wrapper.find(`[data-test='loadingBoxContainer']`).hasClass('loading'))
        expect(wrapper.find(`[data-test='loadingBoxContainer']`).text()).toBe('Loading...')
    })

})