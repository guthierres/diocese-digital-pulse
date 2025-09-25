import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-diocese.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-primary-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Diocese de São Miguel Paulista
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Caminhando juntos na fé, construindo uma comunidade de amor e esperança 
          no coração da zona leste de São Paulo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3" asChild>
            <a href="/sobre">
              Conheça Nossa Missão
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <a href="/sobre">
              Sobre a Diocese
            </a>
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">25+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Paróquias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Padres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">1M+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Fiéis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">45</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Anos</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;