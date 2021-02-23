import { ThemeProvider } from "../src/theme";
import { Layout } from "../src/components";
import { store } from "../src/store";
import { Provider as ReduxProvider } from "react-redux";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [
  (Story) => (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Layout>
          <Story />
        </Layout>
      </ThemeProvider>
    </ReduxProvider>
  ),
];
