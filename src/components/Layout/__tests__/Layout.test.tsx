import { render } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Layout>
        <button>My Test</button>
      </Layout>,
    );
    const buttonElement = getByText('My Test');
    expect(buttonElement).toBeInTheDocument();
  });
});
