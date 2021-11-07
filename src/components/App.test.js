import App from './App';
import { shallow } from 'enzyme';
import Game from './Game';

describe('render the initial app', () => {
  it('renders App', () => {
    shallow(<App />);
  });

  it('finds tic-tac-toe-text', () => {
    const wrapper = shallow(<App/>);
    const header = (<div className = 'title'>Tic-Tac-Toe</div>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('finds the Game component in app', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Game)).toHaveLength(1);
  });
});