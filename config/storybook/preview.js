import { Theme } from "app/providers/ThemeProvider/ui";
import { StyleDecorator } from "shared/config/stortbook/StyleDecorator/StyleDecorator";
import { addDecorator } from "@storybook/react";
import { ThemeDecorator } from "shared/config/stortbook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/stortbook/RouterDecorator/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
