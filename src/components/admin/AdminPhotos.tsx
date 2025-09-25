import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminPhotos = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Gerenciar Galeria de Fotos</CardTitle>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Upload de Fotos
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Interface de gerenciamento da galeria será implementada aqui.
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminPhotos;