import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n/config';
import '../src/index.css';   //import global styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <I18nextProvider i18n={i18n}>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </I18nextProvider>
      );
    },
  ],
};

export default preview;