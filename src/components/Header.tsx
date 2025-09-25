import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigationItems = [
    { name: "Início", href: "/" },
    { name: "Notícias", href: "/noticias" },
    { name: "Eventos", href: "/eventos" },
    { name: "Mensagens do Pastor", href: "/mensagens" },
    { name: "Jornal da Diocese", href: "/jornal" },
    { name: "Galeria", href: "/galeria" },
    {
      name: "Diretório",
      href: "#",
      submenu: [
        { name: "Clero", href: "/clero" },
        { name: "Paróquias", href: "/paroquias" },
      ],
    },
    {
      name: "Institucional",
      href: "#",
      submenu: [
        { name: "Sobre", href: "/sobre" },
        { name: "Missão", href: "/missao" },
        { name: "Contato", href: "/contato" },
        { name: "Doações", href: "/doacoes" },
      ],
    },
  ];

  return (
    <header className="bg-background shadow-medium sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Diocese de São Miguel Paulista</h1>
              <p className="text-xs text-muted-foreground">Arquidiocese de São Paulo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center text-foreground hover:text-primary transition-smooth">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-medium rounded-md border">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-smooth first:rounded-t-md last:rounded-b-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <Button variant="accent" size="sm">
              Contato
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button className="w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md transition-smooth">
                        {item.name}
                      </button>
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-smooth"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-foreground hover:bg-secondary hover:text-primary rounded-md transition-smooth"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button variant="accent" size="sm" className="w-full">
                  Contato
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;