import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const RootMarkIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M16 4C15.8 9.2 16.2 12.8 16 16.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M16 14.5C12.2 16.8 8.5 19.8 6 26.5"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M16 16C16.4 20.5 15.8 24.2 16.5 28"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M16 15C19.8 17.5 23.2 20.4 26 26"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M11.5 19.5C9.8 20.2 8.2 20.3 6.5 19.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M21 19.6C22.8 20.2 24.4 20.1 26.2 19.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12.5 8.5C14 6.5 16 5 16 4C17.8 5.2 19.5 6.8 20.2 8.8"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SunSketchIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M12 7.5C9.4 7.6 7.5 9.6 7.6 12.1C7.7 14.6 9.6 16.4 12.1 16.4C14.6 16.3 16.5 14.4 16.4 11.9C16.3 9.5 14.4 7.4 12 7.5Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M12 3V5M12 19V21M3 12H5M19 12H21M5.6 5.6L7.1 7.1M16.9 16.9L18.4 18.4M18.4 5.6L16.9 7.1M7.1 16.9L5.6 18.4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ChalkboardIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M19.5 14.6C18.1 15.2 16.6 15.4 15 15.1C11.4 14.4 9 11 9.6 7.4C9.8 6.1 10.3 5 11.1 4C7.2 4.5 4.3 7.9 4.5 12C4.7 16.4 8.4 19.7 12.8 19.5C15.8 19.4 18.3 17.4 19.5 14.6Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchSketchIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M10.8 4.2C7.1 4.4 4.3 7.4 4.4 11.1C4.5 14.7 7.5 17.5 11.2 17.3C14.8 17.1 17.5 14.2 17.4 10.6C17.2 6.9 14.3 4 10.8 4.2Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M15.8 15.8L20 20.1"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseSketchIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M6.2 6.4L17.8 17.7M17.6 6.2L6.4 17.9"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

export const BookmarkSketchIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M6.5 4.2C9.5 3.9 14.5 3.9 17.5 4.3C17.7 9.5 17.6 15.2 17.4 20L12 16.2L6.6 20C6.4 15 6.4 9.2 6.5 4.2Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuSketchIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M4 6.5C8.5 6.2 15.5 6.3 20 6.6M4.2 12.1C9 11.9 15.2 12.2 19.8 12M4 17.6C8.8 17.4 15.4 17.8 20 17.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckSketchIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
    <path
      d="M4.2 10.6L8.2 14.5L16 5.8"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ComboSketchIcon: React.FC<IconProps> = ({ size = 19, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="9.2" cy="12" r="5.6" stroke="currentColor" strokeWidth="1.85" />
    <circle cx="14.8" cy="12" r="5.6" stroke="currentColor" strokeWidth="1.85" />
  </svg>
);

export const GuideSketchIcon: React.FC<IconProps> = ({ size = 19, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M4.8 6.2C7.4 5.4 10 5.8 12 7.2C14 5.8 16.6 5.4 19.2 6.2V17.8C16.6 17 14 17.4 12 18.8C10 17.4 7.4 17 4.8 17.8V6.2Z"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 7.2V18.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const BriefcaseSketchIcon: React.FC<IconProps> = ({ size = 19, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M4.2 8.6C8.5 8.2 15.5 8.2 19.8 8.6C20 12.2 19.9 15.8 19.6 18.8C15.2 19.2 8.8 19.2 4.4 18.8C4.1 15.8 4 12.2 4.2 8.6Z"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8.3V6.1C9 5.3 9.7 4.8 10.6 4.8H13.4C14.3 4.8 15 5.3 15 6.1V8.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M4.4 12.6C8.8 13.5 15.2 13.5 19.6 12.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
  </svg>
);

export const SketchUnderline: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 220 14"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M3 10.5C48 4.2 124 3.5 217 9.2"
      stroke="var(--accent)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M14 12.4C68 8.4 146 7.8 206 11.4"
      stroke="var(--accent)"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export const RootSubjectIcon: React.FC<{ rootId: string; size?: number }> = ({ rootId, size = 18 }) => {
  switch (rootId) {
    case 'matematika':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19L19 5M6 7H11M8.5 4.5V9.5M14 17H19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'fisika':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="8.5" ry="3.8" transform="rotate(-32 12 12)" stroke="currentColor" strokeWidth="1.7" />
          <ellipse cx="12" cy="12" rx="8.5" ry="3.8" transform="rotate(32 12 12)" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'kimia':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9.5 4H14.5M10.5 4V9.5L5.8 18.2C5.4 19 6 19.8 6.9 19.8H17.1C18 19.8 18.6 19 18.2 18.2L13.5 9.5V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.4 14.5H15.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'biologi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 19C6.4 11.2 11.2 6.2 19 5.5C18.5 13.5 13.8 18.2 6 19Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 19.5C9.5 15.5 12.8 12.2 16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'geografi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.5 12H19.5M12 4.2C9.6 6.8 9.6 17.2 12 19.8M12 4.2C14.4 6.8 14.4 17.2 12 19.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'seni':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4.2C7.4 4.3 4 7.8 4.2 12.2C4.4 16.5 7.8 19.6 11.8 19.5C13.2 19.5 14 18.4 13.6 17.2C13.2 16.1 14 15.1 15.2 15.1H16.8C18.7 15.1 20 13.5 19.8 11.4C19.5 7.3 16.2 4.1 12 4.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8.5" cy="10.2" r="1.1" fill="currentColor" />
          <circle cx="11.8" cy="8.2" r="1.1" fill="currentColor" />
          <circle cx="15.2" cy="9.8" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'ekonomi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.5 19.2H19.5M6.5 15.5V19M11.5 11.2V19M16.5 7.2V19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M6 11.8L11.2 8.2L16.8 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'sosiologi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="8.5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.2" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 18.5C4.5 15.2 6.5 14 8.5 14C10.5 14 12.2 15.2 12.7 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13.8 18.5C14.2 16 15.5 14.8 17.2 14.8C18.8 14.8 19.8 16 20.2 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'bahasa':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.8 6.2C7.4 5.4 10 5.8 12 7.2C14 5.8 16.6 5.4 19.2 6.2V17.8C16.6 17 14 17.4 12 18.8C10 17.4 7.4 17 4.8 17.8V6.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7.2V18.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9.6" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="14.4" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
};
