import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const CTASection = () => {
  const handleEnroll = () => {
    // Add enrollment link here
    console.log("Redirecting to enrollment...");
  };

  return (
    <section id="offer" className="py-20 px-4 gradient-subtle">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-accent">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Chegou a Sua Hora</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Você Sente o Chamado para Ajudar?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seja um ponto de luz neste mundo. Ajude a preservar esta sabedoria ancestral 
            e torne-se um <strong className="text-foreground">agente de cura e proteção</strong>.
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-strong border-2 border-primary/20 overflow-hidden max-w-3xl mx-auto">
          <div className="gradient-hero p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-background mb-3">
              Curso de Benzimento
            </h3>
            <p className="text-xl text-background/90 font-medium">
              Com Prof. Laércio Fonseca
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">5 Aulas Completas e Práticas</p>
                  <p className="text-muted-foreground">Da teoria profunda às técnicas avançadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Acesso Vitalício em Qualquer Dispositivo</p>
                  <p className="text-muted-foreground">Estude no seu tempo, onde quiser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Certificado de Conclusão</p>
                  <p className="text-muted-foreground">Reconheça oficialmente seu conhecimento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Garantia Incondicional de 7 Dias</p>
                  <p className="text-muted-foreground">Risco zero, 100% do seu dinheiro de volta</p>
                </div>
              </div>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
              <p className="text-center text-lg font-serif italic leading-relaxed">
                "Não deixe que esta sabedoria desapareça. A humanidade precisa de você. 
                Aceite este chamado e torne-se um guardião da arte ancestral do benzimento."
              </p>
            </div>

            <Button 
              onClick={handleEnroll}
              size="lg" 
              className="w-full gradient-hero text-xl font-bold py-8 shadow-medium hover:shadow-strong transition-smooth group"
            >
              Quero Resgatar Esta Arte Agora
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-smooth" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Pagamento 100% seguro • Acesso imediato após confirmação
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Este curso é para você que sente o chamado de <strong className="text-foreground">servir 
            a humanidade com amor e seriedade</strong>. Para você que deseja proteger sua família, 
            seus animais, seu lar, e ajudar aqueles que precisam de cura e proteção espiritual.
          </p>
          <p className="text-xl font-semibold text-primary">
            O mundo precisa de mais benzedores. Você será um deles?
          </p>
        </div>
      </div>
    </section>
  );
};
