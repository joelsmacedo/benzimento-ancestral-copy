import { Sparkles } from "lucide-react";
import knowledgeIcon from "@/assets/icon-new-knowledge.jpg";
export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">A Solução</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Resgate da Arte de Benzer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={knowledgeIcon} 
              alt="Conhecimento Ancestral" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-medium object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Após anos de <strong className="text-foreground">profunda pesquisa nas tradições brasileiras</strong>, 
              o Prof. Laércio Fonseca desenvolveu este curso para que o conhecimento ancestral do benzimento 
              não seja extinto.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Este não é um curso apenas de rezas decoradas. Aqui você vai <strong className="text-foreground">compreender 
              os processos espirituais e energéticos</strong> por trás de cada benzimento, aprendendo como 
              funciona a interação com o plano espiritual e as egrégoras de cura.
            </p>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-primary">Domine na Prática:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>A teoria profunda e a prática objetiva do benzimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Como interagir com as forças espirituais de cura</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Técnicas para benzer pessoas, casas, animais e plantas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Como realizar benzimentos à distância</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Desfazer trabalhos espirituais negativos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
