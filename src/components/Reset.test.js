import Reset from './Reset';
import { shallow } from 'enzyme';

const mockCallback = jest.fn();

describe('render Reset component', () => {
  it('renders Reset', () => {
    shallow(<Reset />);
  })

  it('detect if button exists', () => {
    const wrapper = shallow(<Reset />)
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('detect if button is clickable', () => {
    const wrapper = shallow(<Reset onClick = {mockCallback}/>)
    const buttonComponent = wrapper.find('button')
    buttonComponent.simulate('click')
    expect(mockCallback).toHaveBeenCalled();
  })
})