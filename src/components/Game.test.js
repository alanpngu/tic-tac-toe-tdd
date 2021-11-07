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
    expect(buttonComponent.text()).toBe('X')
  })

  it ('displays O properly when second player clicks', () => {
    const boardDiv = component.find('div.gameBoard');
    const firstButton = boardDiv.find('button').first()
    firstButton.simulate('click')
    expect(firstButton.text()).toBe('X')

    const lastButton = boardDiv.find('button').last()
    lastButton.simulate('click')
    expect(lastButton.text()).toBe('O')
  })

  it('X is still displayed when second player clicks on same location as first', () => {
    const firstButton = component.find('button').first()
    firstButton.simulate('click')
    expect(firstButton.text()).toBe('X')

    firstButton.simulate('click')
    expect(firstButton.text()).toBe('X')
  }) 

  it('player does not use turn if already taken square clicked', () => {
    expect(component.find('div.turnText').text()).toEqual("It is currently X's turn!")

    const firstButton = component.find('button').first()
    firstButton.simulate('click')
    expect(component.find('div.turnText').text()).toEqual("It is currently O's turn!")

    firstButton.simulate('click')
    expect(component.find('div.turnText').text()).toEqual("It is currently O's turn!")
  }) 

  it ('displays that X is a winner if X win condition met', () => {
    component.find('button').at(0).simulate('click');
    component.find('button').at(3).simulate('click');
    component.find('button').at(1).simulate('click');
    component.find('button').at(4).simulate('click');
    component.find('button').at(2).simulate('click');
    expect(component.find('div.turnText').text()).toEqual("X has won the game!")
  })

  it ('displays that O is a winner if O win condition met', () => {
    component.find('button').at(0).simulate('click');
    component.find('button').at(3).simulate('click');
    component.find('button').at(1).simulate('click');
    component.find('button').at(4).simulate('click');
    component.find('button').at(7).simulate('click');
    component.find('button').at(5).simulate('click');
    expect(component.find('div.turnText').text()).toEqual("O has won the game!")
  })

  it ('displays that draw occurs if no win condition met', () => {
    component.find('button').at(0).simulate('click');
    component.find('button').at(1).simulate('click');
    component.find('button').at(2).simulate('click');
    component.find('button').at(4).simulate('click');
    component.find('button').at(3).simulate('click');
    component.find('button').at(5).simulate('click');   
    component.find('button').at(7).simulate('click');
    component.find('button').at(6).simulate('click');
    component.find('button').at(8).simulate('click');
    expect(component.find('div.turnText').text()).toEqual("This game is a draw!")
  })

  it ('clicking on Reset button will reset the board and turns to initial state', () => {
    const boardDiv = component.find('div.gameBoard');
    const firstButton = boardDiv.find('button').first()
    firstButton.simulate('click');
    expect(firstButton.text()).toBe('X')
    const otherButtonDiv = component.find('div.otherButtons');
    const resetButton = otherButtonDiv.find('button').first();
    resetButton.simulate('click');
    expect(firstButton.text()).toBe('')
  })
});
