import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Missa da Sagrada Família",
      slug: "missa-sagrada-familia",
      date: "29/12/2024",
      time: "19:00",
      location: "Catedral São Miguel Arcanjo",
      description: "Celebração especial em honra à Sagrada Família com bênção das famílias presentes.",
      status: "confirmado"
    },
    {
      id: 2,
      title: "Adoração ao Santíssimo Sacramento",
      slug: "adoracao-santissimo-sacramento",
      date: "31/12/2024",
      time: "23:00",
      location: "Paróquia São José",
      description: "Vigília de Ano Novo com adoração e oração pela paz mundial.",
      status: "confirmado"
    },
    {
      id: 3,
      title: "Encontro de Jovens - Projeto Vida",
      slug: "encontro-jovens-projeto-vida",
      date: "05/01/2025",
      time: "14:00",
      location: "Centro Pastoral Diocesano",
      description: "Encontro mensal com dinâmicas, testemunhos e formação para jovens de 15 a 25 anos.",
      status: "confirmado"
    },
    {
      id: 4,
      title: "Curso de Noivos",
      slug: "curso-noivos",
      date: "12/01/2025",
      time: "09:00",
      location: "Paróquia Santa Teresinha",
      description: "Preparação matrimonial para casais que desejam celebrar o sacramento do matrimônio.",
      status: "confirmado"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe dos eventos e celebrações que fortalecem nossa comunidade de fé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="shadow-soft hover:shadow-medium transition-smooth group">
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-smooth">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'confirmado' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-destructive/20 text-destructive'
                    }`}
                  >
                    {event.status === 'confirmado' ? 'Confirmado' : 'Cancelado'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/eventos/${event.slug}`}>
                    Mais Informações
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/eventos">
              Ver Agenda Completa
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;