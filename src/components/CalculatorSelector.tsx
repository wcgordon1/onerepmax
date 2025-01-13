import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const calculators = [
  { path: '/bench', name: '🏋️‍♂️ Bench Press 1RM' },
  { path: '/deadlift', name: '💪 Deadlift 1RM' },
  { path: '/squat', name: '🦵 Squat 1RM' },
  { path: '/barbell-plate-calculator', name: '🎯 Plate Loading Calculator' }
];

interface CalculatorSelectorProps {
  currentPath?: string;
}

export const CalculatorSelector = ({ currentPath = '/calculators' }: CalculatorSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState('left-0');
  const { i18n } = useTranslation();

  // Get current calculator name based on path
  const getCurrentCalculator = () => {
    const currentCalc = calculators.find(calc => currentPath.includes(calc.path));
    return currentCalc?.name || '💯 Calculators';
  };

  const handleCalculatorChange = (path: string) => {
    window.location.href = `/${i18n.language}${path}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check position for dropdown
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceOnRight = window.innerWidth - rect.right;
        if (spaceOnRight < 200) {
          setDropdownPosition('right-0');
        } else {
          setDropdownPosition('left-0');
        }
      }
    };

    updateDropdownPosition();
    window.addEventListener('resize', updateDropdownPosition);
    return () => window.removeEventListener('resize', updateDropdownPosition);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          bg-dark-lighter
          text-white
          px-4
          py-2
          rounded-lg
          border
          border-gray-700
          hover:border-primary
          focus:border-primary
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:ring-opacity-50
          transition-colors
          cursor-pointer
          shadow-sm
          font-medium
          flex
          items-center
          space-x-2
        "
      >
        <span>{getCurrentCalculator()}</span>
        <svg 
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute
          ${dropdownPosition}
          z-50
          mt-2
          w-64
          rounded-lg
          bg-dark-lighter
          border
          border-gray-700
          shadow-lg
          py-1
        `}>
          {calculators.map((calc) => (
            <button
              type="button"
              key={calc.path}
              onClick={() => {
                handleCalculatorChange(calc.path);
                setIsOpen(false);
              }}
              className="
                w-full
                text-left
                px-4
                py-2
                text-white
                hover:bg-gray-700/50
                transition-colors
                focus:outline-none
                focus:bg-gray-700/50
                whitespace-nowrap
              "
            >
              {calc.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 