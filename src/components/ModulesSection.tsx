import { BookOpen, Zap, Users, Home, Radio } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    number: "01",
    icon: BookOpen,
    title: "Resgatando A Arte Dos Benzimentos",
    description: "Compreenda a essência profunda das técnicas ancestrais e como elas interagem com o plano espiritual. Descubra as egrégoras de cura e os fundamentos que fazem o benzimento funcionar.",
    highlights: ["Fundamentos espirituais", "Egrégoras de cura", "História e tradição"]
  },
  {
    number: "02",
    icon: Zap,
    title: "Como Funcionam Os Benzimentos",
    description: "Entenda tecnicamente por que o benzimento cura. Aprenda sobre bioenergia, campo áurico, e o que realmente são o quebranto, bucho virado e mau-olhado. Prepare-se adequadamente como benzedor.",
    highlights: ["Bioenergia e campo áurico", "Anatomia espiritual", "Preparação do benzedor"]
  },
  {
    number: "03",
    icon: Users,
    title: "Técnicas De Benzimento De Pessoas",
    description: "Da teoria à prática: preparação do paciente, criação de instrumentos de poder (patuá), preparação de água benta energizada e a primeira técnica completa de benzimento geral.",
    highlights: ["Preparação do paciente", "Criação de patuá", "Técnica de benzimento geral"]
  },
  {
    number: "04",
    icon: Home,
    title: "Benzimentos de Casas, Veículos, Plantas e Animais",
    description: "Expanda sua prática além das pessoas. Aprenda técnicas específicas para benzer casas, ambientes de trabalho, plantas e animais. Técnicas simples e objetivas para se tornar um benzedor completo.",
    highlights: ["Limpeza de ambientes", "Proteção de veículos", "Harmonização de animais e plantas"]
  },
  {
    number: "05",
    icon: Radio,
    title: "Benzimento A Distância e Técnicas Avançadas",
    description: "Domine as técnicas avançadas: como desfazer trabalhos espirituais negativos (macumbas, vudus), realizar benzimentos à distância sem a presença do paciente, afastar animais peçonhentos e limpeza profunda do campo áurico.",
    highlights: ["Benzimento à distância", "Desfazer trabalhos", "Limpeza do campo áurico"]
  }
];

export const ModulesSection = () => {
  return (
    <section id="modules" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Conteúdo Programático</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 aulas completas que vão da teoria profunda à prática avançada, 
            sem enrolação e direto ao ponto.
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-medium transition-smooth border-2">
              <CardHeader className="bg-gradient-subtle pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                      <module.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">AULA {module.number}</span>
                    </div>
                    <CardTitle className="text-2xl mb-3">{module.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {module.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
