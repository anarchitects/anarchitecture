import { provideRouter } from "@angular/router";
import { applicationConfig, Preview } from "@storybook/angular";

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    })
  ],
};

export default preview;
