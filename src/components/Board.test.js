import Board from './Board';
import Square from './Square';
import { shallow } from 'enzyme';

describe('render Board component', () => {
  it('Board component rendering', () => {
    shallow(<Board />);
  });
  it('detect a Square in Board', () => {
    const component = shallow(<Board />);
    expect(component.contains(<Square />)).toEqual(true);
  });
});
