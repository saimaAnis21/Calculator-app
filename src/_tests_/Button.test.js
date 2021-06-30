import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

describe('ButtonPanel renders correctly', () => {
  const test = () => { };

  it('renders correctly', () => {
    const tree = renderer
      .create(<Button name="AC" clickHandler={test} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with provided name', () => {
    render(<Button name="AC" clickHandler={test} />);
    expect(screen.getByText('AC')).toHaveTextContent('AC');
  });
});
