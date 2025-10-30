import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="group rounded-lg p-6 transition-all duration-300 hover:shadow-glow" style={{ backgroundColor: '#F6F2E7' }}>
      <div className="mb-4 inline-flex p-3 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)' }}>
        <Icon className="w-8 h-8" style={{ color: '#3E6B45' }} />
      </div>
      <h3 className="font-headline text-2xl mb-2 tracking-wide" style={{ color: '#2E4D38' }}>{title}</h3>
      <p className="font-body leading-relaxed" style={{ color: '#7A6952' }}>{description}</p>
    </div>
  );
};
