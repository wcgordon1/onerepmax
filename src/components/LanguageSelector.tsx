import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', name: '🇺🇸 English' },
  { code: 'zh', name: '🇨🇳 中文' },
  { code: 'es', name: '🇪🇸 Español' },
  { code: 'fr', name: '🇫🇷 Français' },
  { code: 'de', name: '🇩🇪 Deutsch' },
  { code: 'ja', name: '🇯🇵 日本語' },
  { code: 'pa', name: '🇵🇰 ਪੰਜਾਬੀ' },
  { code: 'jv', name: '🇮🇩 Basa Jawa' },
  { code: 'ko', name: '🇰🇷 한국어' },
  { code: 'vi', name: '🇻🇳 Tiếng Việt' },
  { code: 'tr', name: '🇹🇷 Türkçe' },
  { code: 'sw', name: '🇹🇿 Kiswahili' },
  { code: 'it', name: '🇮🇹 Italiano' },
  { code: 'fa', name: '🇮🇷 فارسی' },
  { code: 'ar', name: '🇸🇦 العربية' },
  { code: 'bn', name: '🇧🇩 বাংলা' },
  { code: 'pt', name: '🇧🇷 Português' },
  { code: 'ru', name: '🇷🇺 Русский' },
  { code: 'ur', name: '🇵🇰 اردو' },
  { code: 'hi', name: '🇮🇳 हिंदी' },
  { code: 'ta', name: '🇱🇰 தமிழ்' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState('left-0');

  const handleLanguageChange = (code: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|zh|es|fr|de|ja|pa|jv|ko|vi|tr|sw|it|fa|ar|bn|pt|ru|ur|hi|ta)/, '');
    const newPath = `/${code}${pathWithoutLang || '/'}`;
    window.location.href = newPath;
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

  // Add this function to check position
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceOnRight = window.innerWidth - rect.right;
        if (spaceOnRight < 200) { // If less than 200px from right edge
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

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
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
        <span>{currentLanguage.name}</span>
        <svg 
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute
          ${dropdownPosition}
          z-50
          mt-2
          w-48
          rounded-lg
          bg-dark-lighter
          border
          border-gray-700
          shadow-lg
          py-1
          max-h-96
          overflow-auto
          scrollbar-thin
          scrollbar-thumb-gray-700
          scrollbar-track-dark-lighter
        `}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
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
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};