import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from './PageSEO';

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-1 text-[#C2C2CC]/90">
        <li className="inline-flex items-center gap-1">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[#00D0FF] hover:text-[#75FF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D0FF] rounded px-1"
          >
            <Home className="w-4 h-4" aria-hidden />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-[#2A2A33]" aria-hidden />
              {isLast ? (
                <span className="text-white font-medium px-1" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-[#00D0FF] hover:text-[#75FF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D0FF] rounded px-1"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
