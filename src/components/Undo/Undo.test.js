import Undo from './Undo';
import { shallow } from 'enzyme';

const mockCallback = jest.fn();

describe('render Undo component', () => {
  it('renders Undo', () => {
    shallow(<Undo />);
  })

  it('detect if button exists', () => {
    const wrapper = shallow(<Undo />)
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('detect if button is clickable', () => {
    const wrapper = shallow(<Undo onClick = {mockCallback}/>)
    const buttonComponent = wrapper.find('button')
    buttonComponent.simulate('click')
    expect(mockCallback).toHaveBeenCalled();
  })

  it('detect if button has text for Undo', () => {
    const wrapper = shallow(<Undo />)
    const buttonComponent = wrapper.find('button')
    expect(buttonComponent.text()).toEqual('Undo');
  })
})