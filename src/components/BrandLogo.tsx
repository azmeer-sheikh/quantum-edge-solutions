import logoImage from 'figma:asset/f8d2259844c66230ae506df87cb3509ebf5d13b9.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'large' | 'small';
}

export function BrandLogo({ className = "", variant = 'default' }: BrandLogoProps) {
  const sizeClasses = {
    small: 'w-32',
    default: 'w-48',
    large: 'w-64',
  };

  return (
    <div className={`${sizeClasses[variant]} ${className}`}>
      <img 
        src={logoImage} 
        alt="quantum Edge Solutions" 
        className="w-full h-auto"
      />
    </div>
  );
}

// For hero sections and key branding moments
export function BrandLogoHero({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src={logoImage} 
        alt="quantum Edge Solutions" 
        className="w-full h-auto glow-cyan"
      />
    </div>
  );
}