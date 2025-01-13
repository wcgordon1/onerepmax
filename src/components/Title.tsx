import { useTranslation } from 'react-i18next';

export const Title = () => {
  const { t } = useTranslation('plateCalculator');
  
  return (
    <h1 className="text-4xl font-bold mb-8 text-center">
      {t('title')}
    </h1>
  );
}; 