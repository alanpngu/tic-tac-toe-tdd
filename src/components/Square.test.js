import Square from './Square';
import { shallow } from 'enzyme';

describe('render Square component', () => {
  it('renders Square', () => {
    shallow(<Square />);
  })
  it('detect if button exists', () => {
    const wrapper = shallow(<Square />)
    expect(wrapper.find('button').length).toEqual(1);
  })
});
