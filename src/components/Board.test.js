import Board from './Board';
import Square from './Square';
import { shallow, mount } from 'enzyme';

describe('render Board component', () => {
  it('Board component rendering', () => {
    shallow(<Board />);
  });
  it('detect a Square in Board', () => {
    const component = shallow(<Board />);
    expect(component.contains(<Square />)).toEqual(true);
  });
  it('render three rows', () => {
    const component = mount(<Board />);
    expect(component.find('div.boardRow').length).toBe(3);
  });
  it('check if 3 rows of 3 squares', () => {
    const component = mount(<Board />);
    component.find('div.boardRow').forEach((row) => {
      expect(row.find(Square)).toHaveLength(3);
    });
  });
  it('check if a button can be clicked from square from board', () => {
    const mockCallback = jest.fn();
    const squares = Array(9).fill(<Square onClick={mockCallback}/>)
    const component = mount(<Board squares={squares} onClick={mockCallback}/>)
    const buttonComponent = component.find('button').first()
    buttonComponent.simulate('click')
    expect(mockCallback).toHaveBeenCalled()
  });
});