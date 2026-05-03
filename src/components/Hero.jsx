// src/components/Hero.jsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 px-4 text-center relative overflow-hidden">
      {/* Efeito de fundo sutil (Opcional para dar um charme moderno) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
          <Zap size={16} className="text-primary" />
          <span>Transformação Digital Inteligente</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Evolua seu negócio com <span className="text-primary">Tecnologia de Ponta</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Desenvolvemos painéis web de alta performance e integramos agentes de inteligência artificial para automatizar seus processos.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="gap-2 text-md h-12 px-8">
            Conhecer Soluções <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-md h-12 px-8">
            Nossos Cases
          </Button>
        </div>
      </div>
    </section>
  );
}