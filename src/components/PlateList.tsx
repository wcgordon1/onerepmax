import React from 'react';
import type { Plate } from '../types/plates';

interface PlateListProps {
  plates: Plate[];
  unit: 'lbs' | 'kg';
}

export const PlateList = ({ plates, unit }: PlateListProps) => {
  // Group plates by weight
  const groupedPlates = plates.reduce((acc, plate) => {
    acc[plate.weight] = (acc[plate.weight] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Plate Count Per Side:</h3>
      <ul className="space-y-1">
        {Object.entries(groupedPlates).map(([weight, count]) => (
          <li key={weight} className="text-gray-300">
            {count} × {weight}{unit}
          </li>
        ))}
      </ul>
    </div>
  );
}; 