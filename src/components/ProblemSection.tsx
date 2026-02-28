import { AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-secondary">
            <AlertCircle className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">O Problema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Mundo Precisa de Mais Benzedores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Uma Sabedoria que Está Desaparecendo</h3>
            <p className="text-muted-foreground leading-relaxed">Antigamente, em cada comunidade havia benzedeiros e benzedeiras que carregavam essa sabedoria ancestral, passada de geração em geração. Hoje, essa arte está se extinguindo, levando consigo um conhecimento precioso de cura e proteção espiritual.



            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Males Que Você Pode Tratar

            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span><strong className="text-foreground">Quebranto</strong> em crianças e adultos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span><strong className="text-foreground">Bucho virado</strong> e desconfortos inexplicáveis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span><strong className="text-foreground">Mau-olhado</strong> e inveja energética</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span><strong className="text-foreground">Energias densas</strong> em casas e ambientes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span><strong className="text-foreground">Desarmonias</strong> em animais e plantas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-subtle p-8 md:p-12 rounded-2xl shadow-medium border border-border">
          <blockquote className="text-xl md:text-2xl text-center font-serif italic leading-relaxed">
            "Sem os benzedores, estamos perdendo não apenas uma técnica, mas uma conexão profunda 
            com as forças de cura que sempre sustentaram nossos antepassados."
          </blockquote>
          <p className="text-center mt-4 text-muted-foreground font-medium">— Prof. Laércio Fonseca</p>
        </div>
      </div>
    </section>);};