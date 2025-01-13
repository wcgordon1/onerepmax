import { useTranslation } from 'react-i18next';

interface LiftTitleProps {
  exercise: 'bench' | 'squat' | 'deadlift';
}

export const LiftTitle = ({ exercise }: LiftTitleProps) => {
  const { t } = useTranslation();
  
  return (
    <h1 className="text-4xl font-bold mb-8 text-center">
      {t(`exercises.${exercise}`)}
    </h1>
  );
}; 