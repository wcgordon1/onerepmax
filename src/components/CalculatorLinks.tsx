import { useTranslation } from 'react-i18next';

const calculators = [
  {
    path: '/bench',
    name: 'Bench Press 1RM',
    icon: '🏋️‍♂️',
    description: 'Calculate your one rep max for bench press'
  },
  {
    path: '/deadlift',
    name: 'Deadlift 1RM',
    icon: '💪',
    description: 'Calculate your one rep max for deadlift'
  },
  {
    path: '/squat',
    name: 'Squat 1RM',
    icon: '🦵',
    description: 'Calculate your one rep max for squat'
  },
  {
    path: '/barbell-plate-calculator',
    name: 'Plate Loading Calculator',
    icon: '🎯',
    description: 'Calculate which plates to load on the barbell'
  }
];

export const CalculatorLinks = () => {
  const { i18n } = useTranslation();

  return (
    <div className="mt-12 mb-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Try Our Calculators</h2>
      <div className="grid gap-4">
        {calculators.map((calc) => (
          <a
            key={calc.path}
            href={`/${i18n.language}${calc.path}`}
            className="
              group
              bg-dark-lighter
              hover:bg-gray-800
              border
              border-gray-700
              hover:border-primary
              rounded-lg
              p-6
              transition-all
              duration-200
              flex
              items-center
              gap-6
              shadow-md
              hover:shadow-lg
              hover:-translate-y-0.5
            "
          >
            <div className="
              text-4xl
              bg-dark
              p-4
              rounded-lg
              group-hover:scale-110
              transition-transform
              duration-200
            ">
              {calc.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {calc.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {calc.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}; 