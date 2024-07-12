import {Preview} from "@storybook/react";
import {ThemeProvider, theme} from "@athom/mui-override/styles";


const preview: Preview = {
  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={theme}>
          <Story/>
        </ThemeProvider>
      )
    },
  ],
};

export default preview;
