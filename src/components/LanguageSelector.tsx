import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ur', name: 'اردو' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|zh|es|fr|ar|bn|pt|ru|ur|hi|ta)/, '');
    const newPath = `/${newLang}${pathWithoutLang || '/'}`;
    window.location.href = newPath;
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="bg-dark-lighter text-white border border-gray-700 rounded px-3 py-1 focus:outline-none focus:border-primary"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};