import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const AdminSettings = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Configurações do Site</CardTitle>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Interface de configurações do site será implementada aqui.
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminSettings;