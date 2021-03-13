import BreadCrumb from './BreadCrumb.js';
import { shallow } from 'enzyme';

describe( 'Bread crumb', () => {
    const breadCrumb = ['c1', 'c2', 'c3', 'c4'];
    const wrapper = shallow(<BreadCrumb breadCrumb={breadCrumb}/>);

    it('Renders ok', () => {
        expect(wrapper.find('li')).toHaveLength(4)
    })
})