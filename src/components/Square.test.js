import Square from './Square';
import { shallow } from 'enzyme';

const mockCallback = jest.fn();

describe('render Square component', () => {
  it('renders Square', () => {
    shallow(<Square />);
  })
  it('detect if button exists', () => {
    const wrapper = shallow(<Square />)
    expect(wrapper.find('button').length).toEqual(1);
  })
  it('detect if button is clickable', () => {
    const wrapper = shallow(<Square onClick = {mockCallback}/>)
    const buttonComponent = wrapper.find('button')
    buttonComponent.simulate('click')
    expect(mockCallback).toHaveBeenCalled();
  })
  it('renders an X if X is passed as value', () => {
    const component = shallow(<Square value={'X'}/>)
    expect(component.text()).toBe('X')
  })
  it('renders an O if O is passed as value', () => {
    const component = shallow(<Square value={'O'}/>)
    expect(component.text()).toBe('O')
  })
})
