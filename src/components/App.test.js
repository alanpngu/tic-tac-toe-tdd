import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('render the initial app', () => {
  it('renders App', () => {
    shallow(<App />);
  });
});