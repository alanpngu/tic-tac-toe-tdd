import { render, screen } from '@testing-library/react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('render Board component', () => {
  it('renders Board', () => {
    shallow(<Board />);
  })
});
