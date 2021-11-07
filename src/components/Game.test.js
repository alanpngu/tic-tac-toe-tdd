import Game from './Game';
import { shallow, mount } from 'enzyme';
import Board from './Board'

describe('render Game component', () => {
  it('renders Game', () => {
    shallow(<Game />);
  })
  it ('game contains a Board', () => {  
    const component = shallow(<Game/>)
    expect(component.find(Board)).toHaveLength(1);
  })
  it ('check if initial state of squares is all null', () => {
    const component = shallow(<Game/>)
    const squareStatus =component.state().squares
    expect(squareStatus).toEqual(Array(9).fill(null))
  })
  it ('check if first player turn is X', () => {
    const component = shallow(<Game/>)
    const turnStatus = component.state().xTurn
    expect(turnStatus).toEqual(true)  
  });
  it('displays whose turn it is currently', () => {
    const wrapper = mount(<Game />)
    expect(wrapper.find('div.turnText').text()).toEqual("It is currently X's turn!")
  })
});
