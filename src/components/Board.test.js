import Board from './Board';
import { shallow } from 'enzyme';

describe('render Board component', () => {
  it('Board component rendering', () => {
    shallow(<Board />);
  })
});