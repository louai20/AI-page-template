import React from 'react';
import { PlanCard } from '../components/PlanCard';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-base-surface-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-base-onSurface-primary mb-4">
            Välj det abonnemang som passar dig
          </h1>
          <p className="text-lg text-base-onSurface-secondary max-w-2xl mx-auto">
            Fria samtal och SMS ingår alltid. Ingen bindningstid. Upplev Sveriges bästa 5G-nät.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          <PlanCard
            title="15 GB"
            price="249 kr/mån"
            features={[
              '15 GB surf inom EU/EES',
              'Fria samtal, SMS & MMS',
              'Ingen bindningstid'
            ]}
          />

          <div className="transform md:-translate-y-4">
            <PlanCard
              title="Obegränsad Snabb"
              price="399 kr/mån"
              features={[
                'Obegränsad surf i Sverige',
                '100 GB i EU/EES',
                'Upp till 250 Mbit/s i 5G-nätet',
                'Extra SIM-kort för 99 kr/mån'
              ]}
              isSelected={true} 
              badgeText="Populärast"
            />
          </div>

          <PlanCard
            title="Obegränsad Snabbast"
            price="499 kr/mån"
            features={[
              'Obegränsad surf i Sverige',
              '100 GB i EU/EES',
              'Upp till 1000 Mbit/s i 5G-nätet',
              'Viaplay Film & Serier ingår'
            ]}
          />
          
        </div>
      </div>
    </main>
  );
}