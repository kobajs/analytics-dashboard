import { fireEvent, render } from '@testing-library/react';
import { CheckboxGroup, CheckboxGroupProps } from '../CheckboxGroup';

const defaultProps: CheckboxGroupProps = {
  label: 'Market Position',
  options: {
    low: true,
    mean: false,
    high: false,
  },
  onChange: (e) => e,
  optionsLabels: {
    low: 'Market Low',
    mean: 'Market Mean',
    high: 'Market High',
  },
};

describe('CheckboxGroup', () => {
  it('should render checkbox group correctly', () => {
    const { getAllByRole, getByText } = render(<CheckboxGroup {...defaultProps} />);

    const checkboxGroup = getAllByRole('checkbox');
    expect(checkboxGroup.length).toBe(3);

    const labelElement = getByText('Market Position');
    expect(labelElement).toBeInTheDocument();
  });

  it('should trigget onChange function when a checkbox is clicked correctly', () => {
    const mockOnChange = jest.fn();
    const props = {
      ...defaultProps,
      onChange: mockOnChange,
    };

    const { getAllByRole } = render(<CheckboxGroup {...props} />);
    const checkboxGroupElement = getAllByRole('checkbox');

    fireEvent.click(checkboxGroupElement[0]);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
