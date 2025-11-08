import { Shield, CheckCircle2 } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-medium">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full gradient-hero flex items-center justify-center shadow-strong">
                <Shield className="w-16 h-16 text-background" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">
                Seu Risco é Zero
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Experimente o curso por <strong className="text-foreground">7 dias completos</strong>. 
                Se por qualquer motivo você sentir que este não é o caminho para você, 
                basta enviar um e-mail e devolvemos 100% do seu investimento.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-left">
                    <strong className="text-foreground">Sem perguntas difíceis</strong> – 
                    Reembolso rápido e respeitoso
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-left">
                    <strong className="text-foreground">7 dias completos</strong> – 
                    Tempo suficiente para conhecer todo o conteúdo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-left">
                    <strong className="text-foreground">100% do valor de volta</strong> – 
                    Garantia incondicional
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-background/60 rounded-xl border border-border">
                <p className="text-lg font-serif italic leading-relaxed">
                  "Acreditamos tanto no poder transformador deste conhecimento que assumimos 
                  todo o risco. Você só tem a ganhar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
