export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Curso de Benzimento</h3>
          <p className="text-background/80">
            Prof. Laércio Fonseca - Resgatando a Arte Ancestral de Cura
          </p>
          <div className="pt-8 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Curso de Benzimento. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
