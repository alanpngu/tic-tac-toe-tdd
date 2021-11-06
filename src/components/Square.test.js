import Square from './Square';
import { shallow } from 'enzyme';

describe('render Square component', () => {
  it('renders Square', () => {
    shallow(<Square />);
  })
});
