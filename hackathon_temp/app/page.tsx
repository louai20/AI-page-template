import React, { FC } from 'react';

// PlanCard Props Interface
interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  badgeText?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

// PlanCard Component
export const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  features,
  badgeText,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`
        relative p-6 rounded-xl
        bg-base-surface-primary
        border-2 transition-all duration-200 h-full flex flex-col
        ${isSelected
          ? 'border-interface-selectedPrimary shadow-lg transform -translate-y-2'
          : 'border-interface-border hover:border-interface-borderHover shadow-sm'
        }
      `}
    >
      {/* Badge */}
      <div className="h-8 mb-2">
        {badgeText && (
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${isSelected ? 'bg-campaign-surface-primary text-campaign-onSurface-primary' : 'bg-base-surface-secondary text-base-onSurface-secondary'}`}>
            {badgeText}
          </span>
        )}
      </div>

      <div className="space-y-6 flex-grow">
        <div className="space-y-2">
          <span className="text-sm font-medium text-base-onSurface-secondary">
            Data
          </span>
          <h2 className="text-3xl font-bold text-base-onSurface-primary">
            {title}
          </h2>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-base-onSurface-primary">
              {price.split(' ')[0]}
            </span>
            <span className="ml-1 text-base font-medium text-base-onSurface-secondary">
              kr/mån
            </span>
          </div>
        </div>

        <ul className="mt-6 space-y-3 pb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-base-onSurface-secondary">
              <span className="mr-2 text-feedback-success" aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className={`
          w-full py-4 px-6 rounded-full font-bold mt-auto
          transition-all duration-200
          ${isSelected
            ? 'bg-accent-surface-primary text-accent-onSurface-primary'
            : 'bg-campaign-surface-primary text-campaign-onSurface-primary hover:opacity-90'
          }
          focus:outline-none focus:ring-2 focus:ring-interface-selectedPrimary focus:ring-offset-2
        `}
        aria-pressed={isSelected}
        type="button"
      >
        {isSelected ? 'Vald' : 'Välj plan'}
      </button>
    </div>
  );
};

// Pricing Page Component
export default function PricingPage() {
  return (
    <main className="min-h-screen bg-base-surface-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-base-onSurface-primary mb-4">
            Välj det abonnemang som passar dig
          </h1>
          <p className="text-lg text-base-onSurface-secondary max-w-2xl mx-auto">
            Fria samtal och SMS ingår alltid. Ingen bindningstid. Upplev Sveriges bästa 5G-nät.
          </p>
        </div>

        {/* Pricing Cards Grid */}
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