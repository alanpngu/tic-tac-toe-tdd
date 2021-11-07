import Board from './Board';
import Square from './Square';
import { shallow, mount } from 'enzyme';

describe('render Board component', () => {
  let squares = Array(9).fill(null);
  let mockCallback = jest.fn();
  let component = mount(<Board squares={squares} onClick={mockCallback}/>);

  it('Board component rendering', () => {
    expect(component).toBeDefined();
  });

  it('detect a Square in Board', () => {
    expect(component.find(Square).length).toBeGreaterThanOrEqual(1);
  });

  it('render three rows', () => {
    expect(component.find('div.boardRow').length).toBe(3);
  });

  it('check if 3 rows of 3 squares', () => {
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