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
  const whatsappNumber = "5511995912344"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os espaços publicitários da Trash Can Mídia.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F2E7' }}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBeach} 
            alt="Praias do Guarujá com lixeiras sustentáveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(46, 77, 56, 0.85)' }}></div>
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
          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: '#F6F2E7' }}>
            Publicidade sustentável nas praias. Mídia inovadora com alto impacto e consciência ambiental.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="font-headline text-xl px-10 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ 
                background: '#F6F2E7', 
                color: '#2E4D38',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E9E1CF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F6F2E7';
              }}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              QUERO ANUNCIAR AGORA
            </Button>
            <p className="font-body text-sm max-w-md mx-auto" style={{ color: '#F6F2E7' }}>
              ✨ Oportunidade limitada • Posições estratégicas disponíveis
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F2E7' }}>
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center mb-12 tracking-wide" style={{ color: '#2E4D38' }}>
            PÚBLICO E ALCANCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-lg animate-scale-in" style={{ backgroundColor: '#E9E1CF' }}>
              <div className="font-headline text-6xl mb-2" style={{ color: '#2E4D38' }}>600.000</div>
              <p className="font-body text-lg" style={{ color: '#7A6952' }}>Visitantes mensais nas praias</p>
            </div>
            <div className="text-center p-8 rounded-lg animate-scale-in" style={{ backgroundColor: '#E9E1CF', animationDelay: "0.1s" }}>
              <div className="font-headline text-6xl mb-2" style={{ color: '#2E4D38' }}>30+</div>
              <p className="font-body text-lg" style={{ color: '#7A6952' }}>Lixeiras estrategicamente posicionadas</p>
            </div>
            <div className="text-center p-8 rounded-lg animate-scale-in" style={{ backgroundColor: '#E9E1CF', animationDelay: "0.2s" }}>
              <div className="font-headline text-6xl mb-2" style={{ color: '#2E4D38' }}>24/7</div>
              <p className="font-body text-lg" style={{ color: '#7A6952' }}>Exposição contínua da sua marca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Format Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center mb-6 tracking-wide" style={{ color: '#2E4D38' }}>
            FORMATO DE ANÚNCIO
          </h2>
          <p className="font-body text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed" style={{ color: '#2B2B2B' }}>
            Nossas lixeiras possuem painéis laterais dedicados para anúncios, além de adesivos frontais personalizados 
            com seu logo, logo da Prefeitura do Guarujá e QR Code direcionando para seu site ou promoções.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in"
                 style={{ backgroundColor: 'rgb(46, 77, 56)' }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = '#8DC63F';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '';
                 }}>
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)' }}>
                <Sticker className="w-8 h-8" style={{ color: '#3E6B45' }} />
              </div>
              <h3 className="font-headline text-xl mb-3 tracking-wide text-white">Adesivo Personalizado</h3>
              <p className="font-body leading-relaxed text-white">
                Adesivo frontal e traseiro da lixeira com arte personalizada desenvolvida especialmente para sua marca
              </p>
            </div>
            
            <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" 
                 style={{ backgroundColor: 'rgb(46, 77, 56)', animationDelay: "0.1s" }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = '#8DC63F';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '';
                 }}>
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)' }}>
                <QrCode className="w-8 h-8" style={{ color: '#3E6B45' }} />
              </div>
              <h3 className="font-headline text-xl mb-3 tracking-wide text-white">QR Code Direcionado</h3>
              <p className="font-body leading-relaxed text-white">
                Inclusão de QR Code direcionando para o site, redes sociais ou promoções da sua empresa
              </p>
            </div>
            
            <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" 
                 style={{ backgroundColor: 'rgb(46, 77, 56)', animationDelay: "0.2s" }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = '#8DC63F';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '';
                 }}>
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)' }}>
                <Megaphone className="w-8 h-8" style={{ color: '#3E6B45' }} />
              </div>
              <h3 className="font-headline text-xl mb-3 tracking-wide text-white">Ações Sazonais</h3>
              <p className="font-body leading-relaxed text-white">
                Campanhas ambientais e ações promocionais patrocinadas por marcas ao longo do ano
              </p>
            </div>
            
            <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in" 
                 style={{ backgroundColor: 'rgb(46, 77, 56)', animationDelay: "0.3s" }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = '#8DC63F';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '';
                 }}>
              <div className="p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)' }}>
                <Monitor className="w-8 h-8" style={{ color: '#3E6B45' }} />
              </div>
              <h3 className="font-headline text-xl mb-3 tracking-wide text-white">Mídia Digital</h3>
              <p className="font-body leading-relaxed text-white">
                Combinação com posts nas redes sociais da Trash Can Mídia, ampliando o alcance da sua marca
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-16">
            <div className="rounded-xl p-8 max-w-4xl mx-auto" style={{ 
              background: 'linear-gradient(90deg, rgba(62, 107, 69, 0.05) 0%, rgba(141, 198, 63, 0.05) 100%)',
              border: '1px solid rgba(62, 107, 69, 0.2)'
            }}>
              <h3 className="font-headline text-3xl mb-4 tracking-wide" style={{ color: '#2E4D38' }}>
                PRONTO PARA COMEÇAR?
              </h3>
              <p className="font-body text-lg mb-6" style={{ color: '#2B2B2B' }}>
                Junte-se às grandes marcas que já descobriram o poder da publicidade sustentável
              </p>
              <Button 
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="font-headline text-lg px-8 py-4 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ 
                  background: 'linear-gradient(90deg, #3E6B45 0%, #8DC63F 100%)', 
                  color: '#FFFFFF',
                  border: 'none'
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
          </div>
          
          {/* Visual Example */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-headline text-3xl mb-4 tracking-wide" style={{ color: '#2E4D38' }}>EXEMPLO VISUAL</h3>
              <p className="font-body text-lg" style={{ color: '#2B2B2B' }}>
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
      <section className="py-20" style={{ backgroundColor: 'rgb(46, 77, 56)' }}>
        <div className="container">
          <h2 className="font-headline text-5xl md:text-6xl text-center mb-12 tracking-wide" style={{ color: '#F6F2E7' }}>
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
      <section className="py-12 md:py-20" style={{ backgroundColor: '#F6F2E7' }}>
        <div className="container">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16 tracking-wide" style={{ color: '#2E4D38' }}>
            CASES DE SUCESSO
          </h2>
          
          {/* AMBEV Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>
                  SUSTENTABILIDADE & CARNAVAL
                </div>
                <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 tracking-wide" style={{ color: '#2E4D38' }}>AMBEV</h3>
                <p className="font-body text-base md:text-lg leading-relaxed mb-4 md:mb-6" style={{ color: '#2E4D38' }}>
                  Durante o Carnaval, a Ambev transformou lixo reciclável coletado nas ruas em novas lixeiras, 
                  em parceria com associações de catadores. A ação gerou renda, visibilidade e engajamento social.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(46, 77, 56, 0.1)', color: '#2E4D38' }}>Reciclagem</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)', color: '#3E6B45' }}>Impacto Social</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>Carnaval</span>
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
                <div className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)', color: '#3E6B45' }}>
                  INOVAÇÃO & PARCERIA
                </div>
                <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 tracking-wide" style={{ color: '#2E4D38' }}>BRASKEM</h3>
                <p className="font-body text-base md:text-lg leading-relaxed mb-4 md:mb-6" style={{ color: '#2E4D38' }}>
                  Em parceria com o parque, a Braskem instalou lixeiras que trocam recicláveis por descontos 
                  em estabelecimentos locais. Com mais de 18 milhões de visitantes anuais, o impacto ambiental e social foi significativo.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(46, 77, 56, 0.1)', color: '#2E4D38' }}>18M+ Visitantes</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)', color: '#3E6B45' }}>Descontos</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>Impacto Ambiental</span>
                </div>
              </div>
            </div>
          </div>

          {/* IKEA Case */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>
                  DESIGN & EDUCAÇÃO
                </div>
                <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 tracking-wide" style={{ color: '#2E4D38' }}>IKEA</h3>
                <p className="font-body text-base md:text-lg leading-relaxed mb-4 md:mb-6" style={{ color: '#2E4D38' }}>
                  A IKEA instalou abrigos de bonde com miniestufas que também atuavam como pontos de triagem 
                  de resíduos, combinando inovação, design e educação ambiental.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(46, 77, 56, 0.1)', color: '#2E4D38' }}>Design Inovador</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)', color: '#3E6B45' }}>Educação Ambiental</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>Triagem</span>
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
                <div className="inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4" style={{ backgroundColor: 'rgba(46, 77, 56, 0.1)', color: '#2E4D38' }}>
                  CONEXÃO & CONSCIÊNCIA
                </div>
                <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 tracking-wide" style={{ color: '#2E4D38' }}>COCA-COLA</h3>
                <p className="font-body text-base md:text-lg leading-relaxed mb-4 md:mb-6" style={{ color: '#2E4D38' }}>
                  Outdoors com setas indicativas levaram pessoas até pontos de reciclagem em eventos e áreas 
                  urbanas na Europa, conectando a marca a práticas conscientes.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(46, 77, 56, 0.1)', color: '#2E4D38' }}>Europa</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(62, 107, 69, 0.1)', color: '#3E6B45' }}>Outdoors</span>
                  <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: 'rgba(141, 198, 63, 0.1)', color: '#8DC63F' }}>Práticas Conscientes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#2E4D38' }}>
        <div className="container max-w-4xl">
          <h2 className="font-headline text-5xl md:text-6xl text-center mb-6 tracking-wide" style={{ color: '#F6F2E7' }}>
            GARANTA SUA POSIÇÃO
          </h2>
          <p className="font-body text-xl text-center mb-8 leading-relaxed" style={{ color: '#F6F2E7' }}>
            <strong>600.000 visitantes mensais</strong> aguardam sua marca nas praias do Guarujá. 
            <br />Posições limitadas disponíveis para a temporada de verão.
          </p>
          
          <div className="rounded-lg p-6 mb-8 max-w-2xl mx-auto" style={{ 
            background: 'linear-gradient(90deg, rgba(141, 198, 63, 0.1) 0%, rgba(246, 242, 231, 0.1) 100%)',
            border: '1px solid rgba(141, 198, 63, 0.3)'
          }}>
            <div className="text-center">
              <h3 className="font-headline text-2xl mb-2" style={{ color: '#F6F2E7' }}>🎯 OPORTUNIDADE ÚNICA</h3>
              <p className="font-body mb-4" style={{ color: '#F6F2E7' }}>
                Posições estratégicas nas praias mais movimentadas do Guarujá
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="font-headline text-xl px-10 py-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    background: '#8DC63F', 
                    color: '#2E4D38',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#2E4D38';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#8DC63F';
                    e.currentTarget.style.color = '#2E4D38';
                  }}
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
      <footer className="py-12" style={{ borderTop: '1px solid #E9E1CF' }}>
        <div className="container">
          <div className="text-center">
            <h3 className="font-headline text-4xl mb-3 tracking-wide" style={{ color: '#2E4D38' }}>
              TRASH CAN MÍDIA
            </h3>
            <p className="font-body mb-6" style={{ color: '#7A6952' }}>
              Publicidade sustentável que faz a diferença
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="transition-colors" style={{ color: '#3E6B45' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#8DC63F'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#3E6B45'}>
                <Share2 className="w-6 h-6" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#3E6B45' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#8DC63F'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#3E6B45'}>
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center">
              <p className="font-body text-sm mb-2" style={{ color: '#7A6952' }}>
                CNPJ: 62.317.153/0001-14
              </p>
              <p className="font-body text-sm mb-2" style={{ color: '#7A6952' }}>
                TRASH CAN MÍDIA LTDA
              </p>
              <p className="font-body text-sm" style={{ color: '#7A6952' }}>
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
