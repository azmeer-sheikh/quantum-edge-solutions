import qesLogo from 'figma:asset/f8d2259844c66230ae506df87cb3509ebf5d13b9.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
}

export function Logo({ className = "w-10 h-10", variant = 'icon' }: LogoProps) {
  if (variant === 'text') {
    return (
      <div className="flex flex-col items-start">
        <span className="text-white font-bold text-lg leading-tight tracking-tight">
          QUANTOM
        </span>
        <span className="text-[#75FF00] font-bold text-lg leading-tight tracking-tight">
          EDGE
        </span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className="flex items-center gap-3">
        <LogoIcon className={className} />
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-lg leading-tight tracking-tight">
            QUANTOM
          </span>
          <span className="text-[#75FF00] font-bold text-lg leading-tight tracking-tight">
            EDGE
          </span>
        </div>
      </div>
    );
  }

  return <LogoIcon className={className} />;
}

function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src={qesLogo} 
      alt="Quantum Edge Solutions" 
      className={`${className} object-contain`}
    />
  );
}

// Watermark version for background decoration
export function LogoWatermark({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <div className={`${className} opacity-5`}>
      <LogoIcon className="w-full h-full" />
    </div>
  );
}

// Floating decorative logo
export function LogoDecorative({ className = "w-32 h-32", position = "top-right" }: { className?: string; position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  const positionClasses = {
    'top-right': 'top-20 right-10',
    'top-left': 'top-20 left-10',
    'bottom-right': 'bottom-20 right-10',
    'bottom-left': 'bottom-20 left-10',
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className} opacity-10 pointer-events-none`}>
      <LogoIcon className="w-full h-full" />
    </div>
  );
}