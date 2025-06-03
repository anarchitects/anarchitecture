import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../../ui/**/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../ui/**/src/lib/**/*.mdx',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        viteConfigPath:
          'libs/app-specific/anarchitects/storybook/vite.config.mts',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
