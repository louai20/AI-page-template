import { FC } from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  badgeText?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const PlanCard: FC<PlanCardProps> = ({ 
  title, 
  price, 
  features, 
  badgeText,
  isSelected = false,
  onSelect 
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
      {/* Dynamic Badge */}
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
          <h3 className="text-3xl font-bold text-base-onSurface-primary">
            {title}
          </h3>
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

        {/* Dynamic Features List */}
        <ul className="mt-6 space-y-3 pb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-base-onSurface-secondary">
               <span className="mr-2 text-feedback-success">✓</span> 
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
        aria-selected={isSelected}
      >
        {isSelected ? 'Vald' : 'Välj plan'}
      </button>
    </div>
  );
};