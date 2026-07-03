import React from 'react';
import logoBlack from '../assets/images/logo-black.svg';
import logoGreenText from '../assets/images/logo-green-text.svg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
  dark?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  light = false,
  dark = false,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-10 md:h-12',
    lg: 'h-16 md:h-20',
    xl: 'h-24 md:h-28',
  };

  const logo = dark ? logoBlack : logoGreenText;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Meihen Logo"
        className={`${sizeClasses[size]} w-auto`}
      />
    </div>
  );
}