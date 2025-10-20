import { Button } from "@/components/ui/button";
import { BenefitCard } from "@/components/BenefitCard";
import { CaseCard } from "@/components/CaseCard";
import { Palette, QrCode, CalendarRange, Share2, MessageCircle, Sticker, Globe, Megaphone, Monitor } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import case1 from "@/assets/exemplo.svg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import case4 from "@/assets/case-4.jpg";
import caseSvg1 from "@/assets/1.svg";
import caseSvg2 from "@/assets/2.svg";
import caseSvg3 from "@/assets/3.svg";
import caseSvg4 from "@/assets/4.svg";
import logoTrashCanMidia from "@/assets/logo-trash-can-midia.svg";

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
            <div className="flex justify-center mb-4">
              <img 
                src={logoTrashCanMidia} 
                alt="Trash Can Mídia Logo"
                className="h-32 md:h-48 w-auto"
              />
            </div>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="font-body text-xl md:text-2xl text-body-text max-w-3xl mx-auto leading-relaxed mb-8">
            Publicidade sustentável nas praias do Guarujá. Mídia inovadora com alto impacto e consciência ambiental.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary hover:bg-secondary text-primary-foreground font-headline text-xl px-10 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              QUERO ANUNCIAR AGORA
            </Button>
            <p className="font-body text-sm text-body-text/70 max-w-md mx-auto">
              ✨ Oportunidade limitada • Posições estratégicas disponíveis
            </p>
          </div>
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
              <div className="font-headline text-6xl text-primary mb-2">600.000</div>
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
          <p className="font-body text-xl text-center text-body-text max-w-3xl mx-auto mb-16 leading-relaxed">
            Nossas lixeiras possuem painéis laterais dedicados para anúncios, além de adesivos frontais personalizados 
            com seu logo, logo da Prefeitura do Guarujá e QR Code direcionando para seu site ou promoções.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Sticker className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl text-headline mb-3 tracking-wide">Adesivo Personalizado</h3>
              <p className="font-body text-body-text/80 leading-relaxed">
                Adesivo frontal e traseiro da lixeira com arte personalizada desenvolvida especialmente para sua marca
              </p>
            </div>
            
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="p-4 bg-secondary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-headline text-xl text-headline mb-3 tracking-wide">QR Code Direcionado</h3>
              <p className="font-body text-body-text/80 leading-relaxed">
                Inclusão de QR Code direcionando para o site, redes sociais ou promoções da sua empresa
              </p>
            </div>
            
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Megaphone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-headline text-xl text-headline mb-3 tracking-wide">Ações Sazonais</h3>
              <p className="font-body text-body-text/80 leading-relaxed">
                Campanhas ambientais e ações promocionais patrocinadas por marcas ao longo do ano
              </p>
            </div>
            
            <div className="text-center p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl text-headline mb-3 tracking-wide">Mídia Digital</h3>
              <p className="font-body text-body-text/80 leading-relaxed">
                Combinação com posts nas redes sociais da Trash Can Mídia, ampliando o alcance da sua marca
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="font-headline text-3xl text-headline mb-4 tracking-wide">
                PRONTO PARA COMEÇAR?
              </h3>
              <p className="font-body text-lg text-body-text mb-6">
                Junte-se às grandes marcas que já descobriram o poder da publicidade sustentável
              </p>
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-primary hover:bg-secondary text-primary-foreground font-headline text-lg px-8 py-4 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
          </div>
          
          {/* Visual Example */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-headline text-3xl text-headline mb-4 tracking-wide">EXEMPLO VISUAL</h3>
              <p className="font-body text-lg text-body-text/80">
                Veja como sua marca pode se destacar nas praias do Guarujá
              </p>
            </div>
            <div className="animate-fade-in flex justify-center">
              <img 
                src={case1} 
                alt="Exemplo de lixeira com anúncio personalizado"
                className="w-full max-w-md rounded-lg border border-primary/20 shadow-xl"
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
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-center text-headline mb-12 md:mb-16 tracking-wide">
            CASES DE SUCESSO
          </h2>
          
          {/* AMBEV Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  SUSTENTABILIDADE & CARNAVAL
                </div>
                <h3 className="font-headline text-3xl md:text-4xl text-headline mb-4 md:mb-6 tracking-wide">AMBEV</h3>
                <p className="font-body text-base md:text-lg text-body-text leading-relaxed mb-4 md:mb-6">
                  Durante o Carnaval, a Ambev transformou lixo reciclável coletado nas ruas em novas lixeiras, 
                  em parceria com associações de catadores. A ação gerou renda, visibilidade e engajamento social.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Reciclagem</span>
                  <span className="bg-secondary/10 text-secondary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Impacto Social</span>
                  <span className="bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Carnaval</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={caseSvg4} 
                  alt="Case AMBEV - Sustentabilidade no Carnaval"
                  className="w-full max-w-sm md:max-w-lg mx-auto rounded-lg shadow-xl bg-white p-4"
                />
              </div>
            </div>
          </div>

          {/* Braskem Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src={caseSvg1} 
                  alt="Case Braskem - Troca de recicláveis por descontos"
                  className="w-full max-w-sm md:max-w-lg mx-auto rounded-lg shadow-xl bg-white p-4"
                />
              </div>
              <div>
                <div className="inline-block bg-secondary/10 text-secondary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  INOVAÇÃO & PARCERIA
                </div>
                <h3 className="font-headline text-3xl md:text-4xl text-headline mb-4 md:mb-6 tracking-wide">BRASKEM</h3>
                <p className="font-body text-base md:text-lg text-body-text leading-relaxed mb-4 md:mb-6">
                  Em parceria com o parque, a Braskem instalou lixeiras que trocam recicláveis por descontos 
                  em estabelecimentos locais. Com mais de 18 milhões de visitantes anuais, o impacto ambiental e social foi significativo.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">18M+ Visitantes</span>
                  <span className="bg-secondary/10 text-secondary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Descontos</span>
                  <span className="bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Impacto Ambiental</span>
                </div>
              </div>
            </div>
          </div>

          {/* IKEA Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-accent/10 text-accent px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  DESIGN & EDUCAÇÃO
                </div>
                <h3 className="font-headline text-3xl md:text-4xl text-headline mb-4 md:mb-6 tracking-wide">IKEA</h3>
                <p className="font-body text-base md:text-lg text-body-text leading-relaxed mb-4 md:mb-6">
                  A IKEA instalou abrigos de bonde com miniestufas que também atuavam como pontos de triagem 
                  de resíduos, combinando inovação, design e educação ambiental.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Design Inovador</span>
                  <span className="bg-secondary/10 text-secondary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Educação Ambiental</span>
                  <span className="bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Triagem</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={caseSvg2} 
                  alt="Case IKEA - Abrigos com pontos de triagem"
                  className="w-full max-w-sm md:max-w-lg mx-auto rounded-lg shadow-xl bg-white p-4"
                />
              </div>
            </div>
          </div>

          {/* Coca-Cola Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src={caseSvg3} 
                  alt="Case Coca-Cola - Outdoors com setas indicativas"
                  className="w-full max-w-sm md:max-w-lg mx-auto rounded-lg shadow-xl bg-white p-4"
                />
              </div>
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  CONEXÃO & CONSCIÊNCIA
                </div>
                <h3 className="font-headline text-3xl md:text-4xl text-headline mb-4 md:mb-6 tracking-wide">COCA-COLA</h3>
                <p className="font-body text-base md:text-lg text-body-text leading-relaxed mb-4 md:mb-6">
                  Outdoors com setas indicativas levaram pessoas até pontos de reciclagem em eventos e áreas 
                  urbanas na Europa, conectando a marca a práticas conscientes.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Europa</span>
                  <span className="bg-secondary/10 text-secondary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Outdoors</span>
                  <span className="bg-accent/10 text-accent px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Práticas Conscientes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-4xl">
          <h2 className="font-headline text-5xl md:text-6xl text-center text-headline mb-6 tracking-wide">
            GARANTA SUA POSIÇÃO
          </h2>
          <p className="font-body text-xl text-center text-body-text mb-8 leading-relaxed">
            <strong>600.000 visitantes mensais</strong> aguardam sua marca nas praias do Guarujá. 
            <br />Posições limitadas disponíveis para a temporada de verão.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="font-headline text-2xl text-headline mb-2">🎯 OPORTUNIDADE ÚNICA</h3>
              <p className="font-body text-body-text mb-4">
                Posições estratégicas nas praias mais movimentadas do Guarujá
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-primary hover:bg-secondary text-primary-foreground font-headline text-xl px-10 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  QUERO ANUNCIAR AGORA
                </Button>
              </div>
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
            </div>
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground mb-2">
                CNPJ: 62.317.153/0001-14
              </p>
              <p className="font-body text-sm text-muted-foreground mb-2">
                TRASH CAN MÍDIA LTDA
              </p>
              <p className="font-body text-sm text-muted-foreground">
                © 2025 Trash Can Mídia. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
