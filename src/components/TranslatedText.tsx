import React from 'react';
import { useTranslation } from 'react-i18next';

interface TranslatedTextProps {
  i18nKey: string;
  className?: string;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ i18nKey, className }) => {
  const { t } = useTranslation();
  return <span className={className}>{t(i18nKey)}</span>;
};