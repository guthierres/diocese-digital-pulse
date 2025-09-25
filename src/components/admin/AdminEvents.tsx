import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminEvents = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Gerenciar Eventos</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Interface de gerenciamento de eventos será implementada aqui.
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminEvents;