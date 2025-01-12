import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Plate } from '../types/plates';

interface PlateVisualizationProps {
  plates: Plate[];
  unit: 'lbs' | 'kg';
}

export const PlateVisualization = ({ plates, unit }: PlateVisualizationProps) => {
  const { t } = useTranslation('plateCalculator');
  
  const getTextColor = (backgroundColor: string) => {
    return ['#FFFF00', '#FFFFFF'].includes(backgroundColor) ? 'black' : 'white';
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">{t('display.barbellSetup')}</h3>
      <div className="relative w-full min-h-[160px] flex items-center justify-center">
        {/* Barbell */}
        <div className="absolute w-[90%] h-3 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full" />
        
        {/* Sleeves */}
        <div className="absolute w-full flex justify-between px-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-l from-gray-400 to-gray-600" />
        </div>

        {/* Plate container */}
        <div className="absolute w-full flex justify-between">
          {/* Left side plates */}
          <div className="flex flex-row-reverse items-center">
            {plates.map((plate, index) => (
              <div
                key={`left-${plate.weight}-${index}`}
                className="flex items-center justify-center rounded-lg transform -translate-x-1 mx-[2px]"
                style={{
                  backgroundColor: plate.color,
                  width: `${Math.max(20, plate.diameter/3)}px`,
                  height: `${Math.max(80, plate.diameter)}px`,
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '2px 0 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <span 
                  className="text-xs font-bold transform -rotate-90"
                  style={{ color: getTextColor(plate.color) }}
                >
                  {plate.weight}
                </span>
              </div>
            ))}
          </div>

          {/* Right side plates */}
          <div className="flex flex-row items-center">
            {plates.map((plate, index) => (
              <div
                key={`right-${plate.weight}-${index}`}
                className="flex items-center justify-center rounded-lg transform translate-x-1 mx-[2px]"
                style={{
                  backgroundColor: plate.color,
                  width: `${Math.max(20, plate.diameter/3)}px`,
                  height: `${Math.max(80, plate.diameter)}px`,
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '-2px 0 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <span 
                  className="text-xs font-bold transform -rotate-90"
                  style={{ color: getTextColor(plate.color) }}
                >
                  {plate.weight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-gray-400">
        {t('display.totalWeight', { 
          weight: plates.reduce((sum, plate) => sum + plate.weight, 0) * 2 + (unit === 'lbs' ? 45 : 20),
          unit: t('units.' + unit)
        })}
      </div>
    </div>
  );
}; 