import { render, screen } from '@testing-library/react';
import Game from './Game';
import { shallow } from 'enzyme';

describe('render Game component', () => {
  it('renders Game', () => {
    shallow(<Game />);
  })
});
