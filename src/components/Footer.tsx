const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-display text-xl text-foreground">
            Nails<span className="text-primary">by</span>Lufuno
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nails by Lufuno
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#gallery" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#prices" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Prices
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
