import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import { useTranslation } from 'react-i18next';

interface CalculatorProps {
  exercise: 'deadlift' | 'bench' | 'squat';
}

export const Calculator: React.FC<CalculatorProps> = ({ exercise }) => {
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const calculateOneRepMax = () => {
    const w = weight;
    const r = reps;

    return {
      epley: w * (1 + 0.0333 * r),
      brzycki: w / (1.0278 - 0.0278 * r),
      mcglothin: (100 * w) / (101.3 - 2.67123 * r),
      lombardi: w * Math.pow(r, 0.1),
      oconner: w * (1 + 0.025 * r),
    };
  };

  const results = calculateOneRepMax();

  return (
    <div className="max-w-2xl mx-auto bg-dark-lighter p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center capitalize">
        {t('calculator.title', { exercise })}
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('calculator.weight')} ({t(`units.${unit}`)})
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="flex-1 bg-dark border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-primary"
              min="0"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'kg' | 'lbs')}
              className="bg-dark border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-primary"
            >
              <option value="kg">{t('units.kg')}</option>
              <option value="lbs">{t('units.lbs')}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t('calculator.reps')}: {reps}
          </label>
          <ReactSlider
            className="w-full h-2 bg-gray-700 rounded-md mt-2"
            thumbClassName="w-6 h-6 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer -mt-2"
            trackClassName="track"
            min={1}
            max={12}
            value={reps}
            onChange={setReps}
          />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">{t('calculator.results')}</h3>
          <div className="space-y-4">
            {Object.entries(results).map(([formula, value]) => (
              <div key={formula} className="flex justify-between items-center bg-dark p-4 rounded">
                <span className="capitalize">{formula}</span>
                <span className="font-bold text-accent">
                  {Math.round(value)} {t(`units.${unit}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};