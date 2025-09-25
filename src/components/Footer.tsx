import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Diocese Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-bold text-lg">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Diocese de São Miguel Paulista</h3>
                  <p className="text-primary-foreground/80 text-sm">Arquidiocese de São Paulo</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Servindo à comunidade católica da zona leste de São Paulo com fé, esperança e caridade. 
                Construindo o Reino de Deus através da evangelização e ação social.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-light">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/mensagens-do-pastor" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Mensagens do Pastor
                  </Link>
                </li>
                <li>
                  <Link to="/jornal" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Jornal da Diocese
                  </Link>
                </li>
                <li>
                  <Link to="/galeria" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Galeria de Fotos
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Sobre a Diocese
                  </Link>
                </li>
                <li>
                  <Link to="/missao" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Missão e Visão
                  </Link>
                </li>
                <li>
                  <Link to="/doacoes" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                    Como Contribuir
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-accent" />
                  <div>
                    <p className="text-primary-foreground/90 text-sm">
                      Rua Américo Salvador Novelli, 300<br />
                      Vila Jacuí - São Paulo/SP<br />
                      CEP: 08060-310
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent" />
                  <span className="text-primary-foreground/90 text-sm">(11) 2051-5200</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent" />
                  <span className="text-primary-foreground/90 text-sm">contato@diocesesmp.org.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Diocese de São Miguel Paulista. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidade" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;