import { fireEvent, render, screen } from '@testing-library/react';
import { SelectDropdown } from '../SelectDropdown';

describe('SelectDropdown', () => {
  it('should render correctly', async () => {
    const { getByRole } = render(
      <SelectDropdown
        value="Value Test 1"
        options={[
          {
            label: 'Label Test 1',
            value: 'Value Test 1',
          },
          {
            label: 'Label Test 2',
            value: 'Value Test 2',
          },
          {
            label: 'Label Test 3',
            value: 'Value Test 3',
          },
        ]}
      />,
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render options when SelectDropdown is clicked (mousedown)', async () => {
    const { getByRole } = render(
      <SelectDropdown
        value="Value Test 1"
        options={[
          {
            label: 'Label Test 1',
            value: 'Value Test 1',
          },
          {
            label: 'Label Test 2',
            value: 'Value Test 2',
          },
          {
            label: 'Label Test 3',
            value: 'Value Test 3',
          },
        ]}
      />,
    );

    const buttonElement = getByRole('button');

    fireEvent.mouseDown(buttonElement);
    expect(screen.getAllByRole('option').length).toBe(3);
  });
});
