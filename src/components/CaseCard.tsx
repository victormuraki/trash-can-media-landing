interface CaseCardProps {
  image: string;
  title: string;
  description: string;
}

export const CaseCard = ({ image, title, description }: CaseCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-headline text-2xl text-headline mb-2 tracking-wide">{title}</h3>
          <p className="font-body text-body-text/90">{description}</p>
        </div>
      </div>
    </div>
  );
};
