import { render, screen } from '@testing-library/react';
import Square from './Square';
import { shallow } from 'enzyme';

describe('render Square component', () => {
  it('renders Square', () => {
    shallow(<Square />);
  })
});
