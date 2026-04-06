import { Award, Smartphone, Clock, CheckCircle2, Check } from "lucide-react";
const benefits = [{
  icon: Award,
  title: "Certificado de Conclusão",
  description: "Seja reconhecido oficialmente sua jornada e dedicação ao aprendizado da arte do benzimento."
}, {
  icon: Smartphone,
  title: "Estude de Qualquer Dispositivo",
  description: "Acesso vitalício no celular, tablet ou computador. Aprenda onde e quando quiser."
}, {
  icon: Clock,
  title: "No Seu Próprio Ritmo",
  description: "Sem pressa, sem pressão. Assista quantas vezes precisar, para sempre."
}, {
  icon: CheckCircle2,
  title: "5 Aulas Diretas ao Ponto",
  description: "Da teoria à prática avançada, sem enrolação. Conteúdo objetivo e completo."
}];
export const BenefitsSection = () => {
  return <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo Que Você Recebe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Além do conhecimento transformador, você terá acesso a benefícios exclusivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-medium transition-smooth">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-soft">
                <benefit.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>)}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Acesso Completo e Vitalício</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">Este conhecimento ancestral estará sempre com você.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">Revisite as aulas quando precisar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">Pratique no seu tempo e evolua constantemente como benzedor.</span>
                </li>
              </ul>
              
            </div>
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full gradient-hero flex items-center justify-center shadow-strong">
                <Award className="w-20 h-20 text-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};