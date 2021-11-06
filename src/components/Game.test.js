import Game from './Game';
import { shallow } from 'enzyme';
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
});
