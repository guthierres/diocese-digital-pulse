import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminJournals = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Gerenciar Jornal da Diocese</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Edição
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Interface de gerenciamento do jornal será implementada aqui.
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminJournals;