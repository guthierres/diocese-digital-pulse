import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Celebração do Dia Mundial da Juventude na Diocese",
      slug: "celebracao-dia-mundial-juventude-diocese",
      excerpt: "Jovens de toda a região se reuniram para celebrar a fé e compartilhar experiências de evangelização.",
      author: "Pe. João Silva",
      date: "15/12/2024",
      image: "/placeholder.svg",
      category: "Eventos"
    },
    {
      id: 2,
      title: "Campanha do Agasalho 2024: Aquecendo Corações",
      slug: "campanha-agasalho-2024-aquecendo-coracoes",
      excerpt: "A tradicional campanha de inverno arrecadou mais de 10 mil peças para famílias em situação de vulnerabilidade.",
      author: "Irmã Maria Santos",
      date: "12/12/2024",
      image: "/placeholder.svg",
      category: "Ação Social"
    },
    {
      id: 3,
      title: "Peregrinação à Aparecida: Inscrições Abertas",
      slug: "peregrinacao-aparecida-inscricoes-abertas",
      excerpt: "Diocese organiza peregrinação especial ao Santuário Nacional com programação litúrgica completa.",
      author: "Coordenação Diocesana",
      date: "10/12/2024",
      image: "/placeholder.svg",
      category: "Peregrinação"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notícias da Diocese
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as principais atividades, eventos e ações pastorais da nossa comunidade diocesana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to={`/noticias/${item.slug}`}>
                    Ler Mais
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/noticias">
              Ver Todas as Notícias
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;