import App from './App';
import { shallow } from 'enzyme';

describe('render the initial app', () => {
  it('renders App', () => {
    shallow(<App />);
  });

  it('finds tic-tac-toe-text', () => {
    const wrapper = shallow(<App/>);
    const header = (<h1>Tic-Tac-Toe</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });
});