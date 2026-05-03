import { Bot, Code2, LineChart, Server } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

export function ServicesSection() {
  const servicos = [
    { titulo: "Agentes de IA Corporativos", descricao: "Automatize o atendimento ao cliente e fluxos internos com assistentes virtuais inteligentes e LLMs personalizados.", Icone: Bot, categoria: "Inteligência Artificial" },
    { titulo: "Desenvolvimento Web Full Stack", descricao: "Criação de landing pages, sistemas web e plataformas completas utilizando React, Tailwind e ecossistemas modernos.", Icone: Code2, categoria: "Engenharia de Software" },
    { titulo: "Análise de Dados Inteligente", descricao: "Transforme dados brutos em painéis visuais interativos que ajudam na tomada de decisão estratégica do seu negócio.", Icone: LineChart, categoria: "Business Intelligence" },
    { titulo: "Infraestrutura e Deploy", descricao: "Configuração de servidores, integração contínua e arquitetura em nuvem para garantir a estabilidade da sua aplicação.", Icone: Server, categoria: "DevOps" }
  ];

  // 2. Variante de animação para os cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2 // Atraso entre o surgimento de cada card
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nossas Especialidades</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas desenhadas para modernizar processos e escalar seus resultados através da tecnologia.
          </p>
        </motion.div>

        {/* 3. Aplique as variantes no grid e nos itens */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicos.map((servico, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard 
                titulo={servico.titulo}
                descricao={servico.descricao}
                Icone={servico.Icone}
                categoria={servico.categoria}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}