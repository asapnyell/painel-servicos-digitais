import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-32 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Efeito 21st.dev: Glow Radial ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Grid sutil */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      
      <div className="container mx-auto max-w-4xl flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium mb-8 backdrop-blur-md shadow-2xl"
        >
          <Zap size={16} className="text-primary" />
          <span>Transformação Digital Inteligente</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
        >
          Evolua seu negócio com <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Tecnologia de Ponta</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed"
        >
          Desenvolvemos painéis web de alta performance e integramos agentes de inteligência artificial para automatizar seus processos.
        </motion.p>

        {/* Botões configurados para rolar a página */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="gap-2 text-md h-14 px-8 shadow-[0_0_30px_-5px_var(--color-primary)]"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer Soluções <ArrowRight size={18} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-md h-14 px-8 border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-md"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Nossos Cases
          </Button>
        </motion.div>
      </div>
    </section>
  );
}