import React from 'react';
import { I18nextProvider as ReactI18nextProvider } from 'react-i18next';
import i18n from '../i18n/config';

export const I18nextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactI18nextProvider i18n={i18n}>
      {children}
    </ReactI18nextProvider>
  );
};