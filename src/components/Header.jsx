// src/components/Header.jsx
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Code2 size={24} />
          </div>
          Prime Studio
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a>
        </nav>

        {/* Botão Call to Action */}
        <div className="flex items-center">
          <Button>Fale Conosco</Button>
        </div>
      </div>
    </header>
  );
}