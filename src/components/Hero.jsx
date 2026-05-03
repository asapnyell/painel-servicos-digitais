// src/components/Hero.jsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
// 1. Importe o motion
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-24 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        {/* 2. Troque a div do Badge por motion.div e adicione props de animação */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6"
        >
          <Zap size={16} className="text-primary" />
          <span>Transformação Digital Inteligente</span>
        </motion.div>

        {/* 3. Troque o h1 por motion.h1 */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
        >
          Evolua seu negócio com <span className="text-primary">Tecnologia de Ponta</span>
        </motion.h1>

        {/* 4. Troque o p por motion.p */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          Desenvolvemos painéis web de alta performance e integramos agentes de inteligência artificial para automatizar seus processos.
        </motion.p>

        {/* 5. Troque a div dos botões por motion.div */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="gap-2 text-md h-12 px-8">
            Conhecer Soluções <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-md h-12 px-8">
            Nossos Cases
          </Button>
        </motion.div>
      </div>
    </section>
  );
}