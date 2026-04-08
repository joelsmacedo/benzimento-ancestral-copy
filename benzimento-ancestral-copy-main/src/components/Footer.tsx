import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-t border-background/20 pt-8 pb-4">
          
          {/* Lado Esquerdo */}
          <div className="text-center md:text-left">
            <p className="text-background/80 text-base md:text-lg">
              Cursos Professor Laércio Fonseca | Espaço Caminho da Luz
            </p>
          </div>

          {/* Lado Direito - Links Legais com Popups */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-4 text-sm font-medium text-background/80">
            
            {/* Modal: Política de Privacidade */}
            <Dialog>
              <DialogTrigger className="hover:text-primary transition-colors hover:underline cursor-pointer">
                Política de Privacidade
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card text-card-foreground">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  <p>A sua privacidade é importante para nós. Esta política descreve como as informações são coletadas, usadas e protegidas neste site.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Coleta de informações</h4>
                  <p>Este site pode coletar informações automaticamente por meio de cookies, pixels e tecnologias semelhantes, incluindo dados como endereço IP, tipo de navegador, páginas acessadas e tempo de navegação.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Uso das informações</h4>
                  <p>As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc pl-5">
                    <li>Melhorar a experiência do usuário</li>
                    <li>Analisar o desempenho da página</li>
                    <li>Exibir anúncios mais relevantes</li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Cookies e tecnologias de rastreamento</h4>
                  <p>Utilizamos cookies e ferramentas como pixel de rastreamento para fins de análise e marketing. O usuário pode desativar os cookies nas configurações do seu navegador.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Compartilhamento de dados</h4>
                  <p>Não vendemos informações pessoais. Dados podem ser compartilhados com plataformas de terceiros para fins de análise e publicidade.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Links externos</h4>
                  <p>Este site pode conter links para páginas externas. Não somos responsáveis pelas políticas de privacidade de outros sites.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Consentimento</h4>
                  <p>Ao utilizar este site, você concorda com esta política de privacidade.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Alterações</h4>
                  <p>Esta política pode ser atualizada a qualquer momento, sem aviso prévio.</p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Modal: Termos de Uso */}
            <Dialog>
              <DialogTrigger className="hover:text-primary transition-colors hover:underline cursor-pointer">
                Termos de Uso
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card text-card-foreground">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Termos de Uso</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  <p>Ao acessar este site, você concorda com os termos descritos abaixo.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Uso do site</h4>
                  <p>O conteúdo deste site é informativo e pode ser alterado sem aviso prévio.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Responsabilidade</h4>
                  <p>Não garantimos resultados específicos com o uso de qualquer produto ou serviço indicado.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Afiliados</h4>
                  <p>Este site pode promover produtos de terceiros e não é responsável por entregas, pagamentos ou suporte relacionados a esses produtos.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Propriedade intelectual</h4>
                  <p>Todo o conteúdo deste site é protegido e não pode ser copiado sem autorização.</p>
                  
                  <h4 className="font-semibold text-foreground mt-4">Modificações</h4>
                  <p>Os termos podem ser alterados a qualquer momento.</p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Modal: Afiliado Oficial */}
            <Dialog>
              <DialogTrigger className="hover:text-primary transition-colors hover:underline cursor-pointer">
                Criado por Afiliado Oficial
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card text-card-foreground">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Aviso de Afiliado</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-muted-foreground leading-relaxed">
                  <p>Este site participa de programas de afiliados e pode receber comissões por indicações realizadas através dos links aqui presentes, sem custo adicional ao usuário.</p>
                  <p>Recomendamos apenas produtos que consideramos relevantes, mas a decisão de compra é de total responsabilidade do usuário.</p>
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </div>

        {/* Direitos Reservados (Centered) */}
        <div className="pt-8 mt-4 border-t border-background/10 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Buscai & Achareis. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
