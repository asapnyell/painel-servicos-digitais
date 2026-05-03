export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-zinc-200 font-bold text-xl flex items-center justify-center gap-2">
          Prime Web Studio
        </p>
        <p className="text-sm mb-2">
          Desenvolvido por <strong>Danyel Henrique</strong> e <strong>Gabriel Damasceno</strong>.
        </p>
        <p className="text-xs text-zinc-500 mb-8">
          Projeto acadêmico para a disciplina de Front-end com React e Design Systems.
        </p>
        <div className="pt-8 border-t border-zinc-900/50 text-xs flex flex-col md:flex-row justify-center items-center gap-4">
          <span>&copy; {anoAtual} Prime Web Studio. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}