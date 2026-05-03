// src/components/ServiceCard.jsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ServiceCard({ titulo, descricao, Icone, categoria }) {
  return (
    <Card className="group hover:border-primary transition-all duration-300 hover:shadow-md flex flex-col h-full bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            {/* O ícone é renderizado dinamicamente aqui */}
            <Icone size={24} strokeWidth={1.5} />
          </div>
          <Badge variant="secondary" className="text-xs font-normal">
            {categoria}
          </Badge>
        </div>
        <CardTitle className="text-xl mb-2">{titulo}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {descricao}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}