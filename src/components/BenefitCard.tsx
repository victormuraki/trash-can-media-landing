import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="group bg-gradient-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
      <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-headline text-2xl text-headline mb-2 tracking-wide">{title}</h3>
      <p className="font-body text-body-text/80 leading-relaxed">{description}</p>
    </div>
  );
};
