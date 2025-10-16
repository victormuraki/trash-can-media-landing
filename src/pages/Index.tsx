import { Button } from "@/components/ui/button";
import { BenefitCard } from "@/components/BenefitCard";
import { CaseCard } from "@/components/CaseCard";
import { Palette, QrCode, CalendarRange, Share2, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import case4 from "@/assets/case-4.jpg";

const Index = () => {
  const whatsappNumber = "5513000000000"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os espaços publicitários da Trash Can Mídia.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBeach} 
            alt="Praias do Guarujá com lixeiras sustentáveis"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container relative z-10 text-center animate-fade-in-up">
          <div className="mb-6">
            <h1 className="font-headline text-7xl md:text-9xl text-headline tracking-wider mb-2">
              TRASH CAN MÍDIA
            </h1>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="font-body text-xl md:text-2xl text-body-text max-w-3xl mx-auto leading-relaxed mb-8">
            Publicidade sustentável nas praias do Guarujá. Mídia inovadora com alto impacto e consciência ambiental.
          </p>
          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-primary hover:bg-secondary text-primary-foreground font-headline text-xl px-8 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            SOLICITAR INFORMAÇÕES
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-12 tracking-wide">
            PÚBLICO E ALCANCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scale-in">
              <div className="font-headline text-6xl text-primary mb-2">50K+</div>
              <p className="font-body text-body-text text-lg">Visitantes mensais nas praias</p>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="font-headline text-6xl text-secondary mb-2">30+</div>
              <p className="font-body text-body-text text-lg">Lixeiras estrategicamente posicionadas</p>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="font-headline text-6xl text-accent mb-2">24/7</div>
              <p className="font-body text-body-text text-lg">Exposição contínua da sua marca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Format Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-6 tracking-wide">
            FORMATO DE ANÚNCIO
          </h2>
          <p className="font-body text-xl text-center text-body-text max-w-3xl mx-auto mb-12 leading-relaxed">
            Nossas lixeiras possuem painéis laterais dedicados para anúncios, além de adesivos frontais personalizados 
            com seu logo, logo da Prefeitura do Guarujá e QR Code direcionando para seu site ou promoções.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-headline mb-1 tracking-wide">Design Personalizado</h3>
                  <p className="font-body text-body-text/80">Arte exclusiva desenvolvida para sua marca</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <QrCode className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-headline mb-1 tracking-wide">QR Code Integrado</h3>
                  <p className="font-body text-body-text/80">Conexão direta com suas plataformas digitais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-headline mb-1 tracking-wide">Localização Estratégica</h3>
                  <p className="font-body text-body-text/80">Pontos de alta circulação nas praias do Guarujá</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src={case1} 
                alt="Exemplo de lixeira com anúncio"
                className="w-full rounded-lg border border-primary/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-12 tracking-wide">
            BENEFÍCIOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <BenefitCard
              icon={Palette}
              title="Arte Personalizada"
              description="Adesivo frontal e traseiro da lixeira com arte personalizada desenvolvida especialmente para sua marca"
            />
            <BenefitCard
              icon={QrCode}
              title="QR Code Direcionado"
              description="Inclusão de QR Code direcionando para o site, redes sociais ou promoções da sua empresa"
            />
            <BenefitCard
              icon={CalendarRange}
              title="Ações Sazonais"
              description="Campanhas ambientais e ações promocionais patrocinadas por marcas ao longo do ano"
            />
            <BenefitCard
              icon={Share2}
              title="Mídia Digital"
              description="Combinação com posts nas redes sociais da Trash Can Mídia, ampliando o alcance da sua marca"
            />
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-12 tracking-wide">
            CASES DE SUCESSO
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CaseCard
              image={case1}
              title="Marca de Bebidas"
              description="Campanha de verão com alto engajamento nas praias"
            />
            <CaseCard
              image={case2}
              title="Protetor Solar"
              description="Posicionamento estratégico para público consciente"
            />
            <CaseCard
              image={case3}
              title="Restaurante Local"
              description="QR Code gerando visitas diretas ao estabelecimento"
            />
            <CaseCard
              image={case4}
              title="Marca Esportiva"
              description="Associação com lifestyle saudável e ativo"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-4xl">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-6 tracking-wide">
            ENTRE EM CONTATO
          </h2>
          <p className="font-body text-xl text-center text-body-text mb-12 leading-relaxed">
            Pronto para levar sua marca para as praias do Guarujá? Entre em contato conosco e descubra como a 
            Trash Can Mídia pode impulsionar sua visibilidade de forma sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary hover:bg-secondary text-primary-foreground font-headline text-xl px-8 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              WHATSAPP
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'mailto:contato@trashcanmidia.com.br'}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-headline text-xl px-8 py-6 rounded-lg transition-all duration-300"
            >
              <Mail className="mr-2 h-6 w-6" />
              E-MAIL
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-card border border-border rounded-lg">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-body text-body-text">+55 (13) 0000-0000</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-body text-body-text">Guarujá, São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="text-center">
            <h3 className="font-headline text-4xl text-headline mb-3 tracking-wide">
              TRASH CAN MÍDIA
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Publicidade sustentável que faz a diferença
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                <Share2 className="w-6 h-6" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="mailto:contato@trashcanmidia.com.br" className="text-primary hover:text-secondary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              © 2025 Trash Can Mídia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
