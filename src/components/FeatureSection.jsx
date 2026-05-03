// src/components/FeatureSection.jsx
import { CheckCircle2 } from "lucide-react";

export function FeatureSection() {
  const vantagens = [
    "Desenvolvimento Ágil e Transparente",
    "Interfaces Focadas em Conversão",
    "Integração com as melhores APIs de IA",
    "Suporte Técnico Especializado"
  ];

  return (
    <section id="sobre" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        {/* Lado Esquerdo: Texto e Vantagens */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Por que escolher a Prime Studio?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Não entregamos apenas código. Entregamos soluções estratégicas que reduzem custos operacionais e aumentam a eficiência da sua equipe através de automação e design inteligente.
          </p>
          <ul className="space-y-4 pt-4">
            {vantagens.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lado Direito: Métrica de Destaque */}
        <div className="flex-1 w-full bg-zinc-950 text-white rounded-2xl p-10 flex items-center justify-center border shadow-xl">
          <div className="text-center space-y-4">
            <div className="text-6xl font-extrabold text-primary">+150%</div>
            <div className="text-2xl font-semibold">Aumento em Eficiência</div>
            <p className="text-zinc-400 max-w-sm mx-auto">
              Média de ganho de nossos clientes após a implementação de fluxos automatizados com IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}