import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Plate } from '../types/plates';

interface PlateListProps {
  plates: Plate[];
  unit: 'lbs' | 'kg';
}

export const PlateList = ({ plates, unit }: PlateListProps) => {
  const { t } = useTranslation('plateCalculator');
  
  const groupedPlates = plates.reduce((acc, plate) => {
    acc[plate.weight] = (acc[plate.weight] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">{t('display.platesPerSide')}</h3>
      <ul className="space-y-1">
        {Object.entries(groupedPlates).map(([weight, count]) => (
          <li key={weight} className="text-gray-300">
            {count} × {weight}{t('units.' + unit)}
          </li>
        ))}
      </ul>
    </div>
  );
}; 