import logo from "figma:asset/f8d2259844c66230ae506df87cb3509ebf5d13b9.png";

interface quantumEdgeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function quantumEdgeLogo({ className = "", size = "md" }: quantumEdgeLogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <img
      src={logo}
      alt="Quantum Edge Solutions"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
}