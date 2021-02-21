import { ThemeProvider } from '../src/theme'
import { Layout } from '../src/components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Layout>
        <Story />
      </Layout>
    </ThemeProvider>
  ),
]
