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
});
