import Game from './Game';
import { shallow, mount } from 'enzyme';
import Board from './Board'

describe('render Game component', () => {
  
  let component;
  
  beforeEach(() => {
    component = mount(<Game/>);
  })

  it('renders Game', () => {
    expect(component).toBeDefined();

  })
  it ('game contains a Board', () => {      
    expect(component.find(Board)).toHaveLength(1);
  })
  it ('check if initial state of squares is all null', () => {
    const squareStatus = component.state().history
    expect(squareStatus[0].squares).toEqual(Array(9).fill(null))
  })
  it ('check if first player turn is X', () => {
    const turnStatus = component.state().xTurn
    expect(turnStatus).toEqual(true)  
  });
  it('displays whose turn it is currently', () => {
    expect(component.find('div.turnText').text()).toEqual("It is currently X's turn!")
  })
  it('turns taken is initialy 0', () => {
    const takenStatus = component.state().turnsTaken
    expect(takenStatus).toEqual(0)  
  })
  it('displays X when first player clicks', () => {
    const buttonComponent = component.find('button').first()
    buttonComponent.simulate('click')
    expect(component.find('button').first().text()).toBe('X')
  })
  it ('displays O properly when second player clicks', () => {
    const firstButton = component.find('button').first()
    firstButton.simulate('click')
    expect(component.find('button').first().text()).toBe('X')
    const lastButton = component.find('button').last()
    lastButton.simulate('click')
    expect(component.find('button').last().text()).toBe('O')
  })
});
