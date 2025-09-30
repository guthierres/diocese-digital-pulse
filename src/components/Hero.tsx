import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-diocese.jpg";

const Hero = () => {
  const [stats, setStats] = useState({
    parishes: 25,
    priests: 50,
    faithful: "1M+",
    years: 45
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('parishes_count, priests_count, faithful_count, years_count')
        .single();
      
      if (error) throw error;
      
      if (data) {
        setStats({
          parishes: data.parishes_count || 25,
          priests: data.priests_count || 50,
          faithful: data.faithful_count || "1M+",
          years: data.years_count || 45
        });
      }
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error);
    }
  };

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
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          Diocese de São Miguel Paulista
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)' }}>
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
            <div className="text-3xl md:text-4xl font-bold text-accent" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>{stats.parishes}+</div>
            <div className="text-primary-foreground text-sm md:text-base font-medium" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>Paróquias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>{stats.priests}+</div>
            <div className="text-primary-foreground text-sm md:text-base font-medium" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>Padres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>{stats.faithful}</div>
            <div className="text-primary-foreground text-sm md:text-base font-medium" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>Fiéis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>{stats.years}</div>
            <div className="text-primary-foreground text-sm md:text-base font-medium" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>Anos</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;