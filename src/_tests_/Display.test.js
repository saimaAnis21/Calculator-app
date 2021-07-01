import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from '../components/Display';
import '@testing-library/jest-dom';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Display />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the outcome that is given as a prop', () => {
    const { container } = render(<Display result="20" />);
    const displayTxt = container.querySelector('span');
    expect(displayTxt).toHaveTextContent('20');
  });

  it('renders with default value of 0', () => {
    const { container } = render(<Display />);
    const displayTxt = container.querySelector('div');
    expect(displayTxt).toHaveTextContent('0');
  });
});
