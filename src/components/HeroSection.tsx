import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-benzimento.jpg";

export const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Benzimento - Arte Ancestral de Cura" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-sm font-medium text-primary">Com Prof. Laércio Fonseca</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Arte Ancestral do Benzimento
              <span className="block mt-2 text-primary">ao Seu Alcance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Resgate um poder que está desaparecendo. Aprenda as técnicas simples do folclore brasileiro 
              para <strong className="text-foreground">cura, proteção e limpeza energética</strong>. 
              Uma sabedoria que não pode morrer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="gradient-hero text-base font-semibold shadow-medium hover:shadow-strong transition-smooth group"
                asChild
              >
                <a 
                  href="https://pay.hotmart.com/G68665723X?sck=HOTMART_PRODUCT_PAGE&off=33xfqa9u&hotfeature=32&bid=1762692454856"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero Resgatar Esta Arte Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base border-2 hover:bg-primary/5"
              >
                Conhecer o Curso
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                5 Aulas Completas
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Certificado Incluso
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Garantia de 7 Dias
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-strong border-2 border-primary/50 lg:ml-8" style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3), 0 0 120px hsl(var(--primary) / 0.15)' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/5JWDysQpBug"
              title="Curso de Benzimento - Prof. Laércio Fonseca"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
