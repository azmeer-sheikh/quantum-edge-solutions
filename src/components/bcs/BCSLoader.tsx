import { Loader2 } from 'lucide-react';

export function BCSLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-[#01BAEF] animate-spin mx-auto mb-4" />
        <p className="text-[#0B4F6C] text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
