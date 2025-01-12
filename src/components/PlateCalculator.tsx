import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Plate } from '../types/plates';
import { PlateVisualization } from './PlateVisualization';
import { PlateList } from './PlateList';

interface CalculationResult {
  success: boolean;
  plates: Plate[];
  error?: string;
  remainingWeight: number;
}

const PLATES_LB = [55, 45, 35, 25, 15, 10, 5, 2.5, 1.5, 1, 0.5];
const PLATES_KG = [25, 20, 15, 10, 5, 2.5, 1.25, 0.5, 0.25];

export const PlateCalculator = () => {
  const [targetWeight, setTargetWeight] = useState<number>(0);
  const [barWeight, setBarWeight] = useState<number>(45);
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [include55s, setInclude55s] = useState<boolean>(false);
  const [calculatedPlates, setCalculatedPlates] = useState<Plate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [actualWeight, setActualWeight] = useState<string | null>(null);
  const { t } = useTranslation('plateCalculator');

  const calculatePlatesNeeded = (
    targetWeight: number,
    barW: number,
    unit: 'lbs' | 'kg'
  ): CalculationResult => {
    if (targetWeight < barW) {
      return {
        success: false,
        plates: [],
        error: t('errors.errorWeightTooLight'),
        remainingWeight: 0
      };
    }

    const weightPerSide = (targetWeight - barW) / 2;
    const availablePlates = unit === 'lbs' 
      ? (include55s ? PLATES_LB : PLATES_LB.filter(w => w !== 55))
      : PLATES_KG;

    let remainingWeight = weightPerSide;
    const platesNeeded: { weight: number; color: string; diameter: number }[] = [];

    for (const plateWeight of availablePlates) {
      if (remainingWeight >= plateWeight) {
        const count = Math.floor(remainingWeight / plateWeight);
        for (let i = 0; i < count; i++) {
          platesNeeded.push({
            weight: plateWeight,
            color: getPlateColor(plateWeight, unit),
            diameter: getPlateDiameter(plateWeight, unit)
          });
        }
        remainingWeight = Number((remainingWeight - (plateWeight * count)).toFixed(2));
      }
    }

    return {
      success: remainingWeight === 0,
      plates: platesNeeded,
      remainingWeight,
      error: remainingWeight === 0 ? undefined : 
        t('errors.closestWeight', {
          weight: (targetWeight - (remainingWeight * 2)).toFixed(1),
          unit: t('units.' + unit)
        })
    };
  };

  const getPlateColor = (weight: number, unit: 'lbs' | 'kg'): string => {
    if (unit === 'lbs') {
      switch (weight) {
        case 55: return '#1a1a1a'; // Black
        case 45: return '#0000FF'; // Blue
        case 35: return '#FFFF00'; // Yellow
        case 25: return '#00FF00'; // Green
        case 15: return '#FFFFFF'; // White
        case 10: return '#808080'; // Gray
        case 5: return '#FF0000';  // Red
        case 2.5: return '#FFA500'; // Orange
        default: return '#800080'; // Purple for others
      }
    } else {
      switch (weight) {
        case 25: return '#FF0000'; // Red
        case 20: return '#0000FF'; // Blue
        case 15: return '#FFFF00'; // Yellow
        case 10: return '#00FF00'; // Green
        case 5: return '#FFFFFF';  // White
        case 2.5: return '#808080'; // Gray
        default: return '#800080'; // Purple for others
      }
    }
  };

  const getPlateDiameter = (weight: number, unit: 'lbs' | 'kg'): number => {
    // Add your diameter logic here based on weight and unit
    return weight * 2; // Simple example scaling
  };

  const handleCalculate = () => {
    if (targetWeight > 0 && barWeight > 0) {
      const result = calculatePlatesNeeded(targetWeight, barWeight, unit);
      if (result.success) {
        setCalculatedPlates(result.plates);
        setError(null);
        setActualWeight(null);
      } else {
        setCalculatedPlates(result.plates);
        setError(result.error || null);
        setActualWeight(result.error);
      }
    } else {
      setError('Please enter valid weights');
    }
  };

  // Handle unit change
  const handleUnitChange = (newUnit: 'lbs' | 'kg') => {
    setUnit(newUnit);
    // Convert bar weight when changing units
    setBarWeight(newUnit === 'lbs' ? 45 : 20);
    setCalculatedPlates([]);
    setError(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-dark-lighter p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-2 text-center">
        {t('title')}
      </h2>
      <p className="text-gray-400 mb-6 text-center">
        {t('description')}
      </p>

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t('inputs.targetWeight')} ({t('units.' + unit)})
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                value={targetWeight || ''}
                onChange={(e) => setTargetWeight(Number(e.target.value))}
                className="flex-1 bg-dark border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-primary"
                min={barWeight}
                step={unit === 'lbs' ? 5 : 2.5}
              />
              <select
                value={unit}
                onChange={(e) => handleUnitChange(e.target.value as 'lbs' | 'kg')}
                className="bg-dark border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-primary"
              >
                <option value="kg">{t('units.kg')}</option>
                <option value="lbs">{t('units.lbs')}</option>
              </select>
            </div>
          </div>

          {unit === 'lbs' && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="include55s"
                checked={include55s}
                onChange={(e) => setInclude55s(e.target.checked)}
                className="w-4 h-4 text-primary bg-dark border-gray-700 rounded focus:ring-primary focus:ring-2"
              />
              <label htmlFor="include55s" className="text-sm text-gray-300">
                {t('inputs.include55')}
              </label>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">
              {t('inputs.barWeight')} ({t('units.' + unit)})
            </label>
            <input
              type="number"
              value={barWeight}
              onChange={(e) => setBarWeight(Number(e.target.value))}
              className="w-full bg-dark border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-primary"
              min={0}
              step={unit === 'lbs' ? 5 : 2.5}
              placeholder={unit === 'lbs' ? "45" : "20"}
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {t('actions.calculate')}
        </button>

        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <>
            {actualWeight && (
              <div className="text-yellow-500 text-center mb-4">{actualWeight}</div>
            )}
            {calculatedPlates.length > 0 && (
              <div className="space-y-4">
                <PlateVisualization plates={calculatedPlates} unit={unit} />
                <PlateList plates={calculatedPlates} unit={unit} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}; 