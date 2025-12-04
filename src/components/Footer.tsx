export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl text-foreground">
              Nebraska<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © 2025 Nebraska Glamping. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
