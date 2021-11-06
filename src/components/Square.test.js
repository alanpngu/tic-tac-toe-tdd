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
  it('detect if button is clickable', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Square onClick = {mockCallback}/>)
    const buttonComponent = wrapper.find('button')
    buttonComponent.simulate('click')
    expect(mockCallback).toHaveBeenCalled();
  })
})
