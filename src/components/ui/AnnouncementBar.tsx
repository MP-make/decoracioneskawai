'use client';

import { Truck, Clock } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white h-10 flex items-center justify-center overflow-hidden animate-fade-in">
      <div className="flex items-center gap-4 text-xs md:text-sm font-medium px-4">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 animate-bounce" />
          <span>Envíos GRATIS en Pisco por compras mayores a S/ 100</span>
        </div>
        <span className="hidden md:inline text-brand-200">|</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>Entrega el mismo día</span>
        </div>
      </div>
    </div>
  );
}
