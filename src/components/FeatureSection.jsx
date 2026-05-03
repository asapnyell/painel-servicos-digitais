import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureSection() {
  const vantagens = [
    "Desenvolvimento Ágil e Transparente",
    "Interfaces Focadas em Conversão",
    "Integração com as melhores APIs de IA",
    "Suporte Técnico Especializado"
  ];

  return (
    <section id="sobre" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Texto e Vantagens */}
        <div className="flex-1 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Por que escolher a Prime Studio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Não entregamos apenas código. Entregamos soluções estratégicas que reduzem custos operacionais e aumentam a eficiência da sua equipe através de automação e design inteligente.
          </motion.p>
          <ul className="space-y-5 pt-4">
            {vantagens.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-4 text-zinc-200"
              >
                <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Lado Direito: Métrica com Animação 21st.dev */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.02, translateY: -10 }}
          className="flex-1 w-full relative group perspective-1000"
        >
          {/* Efeito de brilho externo */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
          
          <div className="relative bg-zinc-900/80 backdrop-blur-2xl border border-zinc-700/50 text-white rounded-3xl p-12 flex items-center justify-center shadow-2xl overflow-hidden">
            {/* Gradiente interno sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="text-center space-y-4 relative z-10">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="text-7xl font-extrabold bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent drop-shadow-sm"
              >
                +150%
              </motion.div>
              <div className="text-2xl font-bold tracking-wide text-zinc-200">Aumento em Eficiência</div>
              <p className="text-zinc-400 max-w-sm mx-auto mt-4 leading-relaxed">
                Média de ganho de nossos clientes após a implementação de fluxos automatizados com IA.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}