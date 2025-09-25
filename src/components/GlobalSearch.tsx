import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { globalSearch, SearchResult } from "@/integrations/supabase/search";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface GlobalSearchProps {
  className?: string;
  placeholder?: string;
}

const GlobalSearch = ({ className, placeholder = "Buscar..." }: GlobalSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        setLoading(true);
        try {
          const searchResults = await globalSearch(searchTerm);
          setResults(searchResults);
        } catch (error) {
          console.error('Erro na busca:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleResultClick = () => {
    setOpen(false);
    setSearchTerm("");
    setResults([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={`relative ${className}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setOpen(true)}
            className="pl-10 pr-4"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandList>
            {loading && (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span className="text-sm text-muted-foreground">Buscando...</span>
              </div>
            )}
            
            {!loading && searchTerm.length >= 2 && results.length === 0 && (
              <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            )}
            
            {!loading && results.length > 0 && (
              <CommandGroup heading="Resultados da Busca">
                {results.map((result) => (
                  <CommandItem key={`${result.type}-${result.id}`} asChild>
                    <Link 
                      to={result.url} 
                      className="flex flex-col items-start gap-1 p-3 cursor-pointer"
                      onClick={handleResultClick}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className="font-medium text-sm line-clamp-1">{result.title}</span>
                        <Badge variant="secondary" className="text-xs">
                          {result.type}
                        </Badge>
                      </div>
                      {result.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {result.description.replace(/<[^>]*>/g, '')}
                        </p>
                      )}
                      {result.date && (
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(result.date), "dd/MM/yyyy", { locale: ptBR })}
                        </span>
                      )}
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {searchTerm.length > 0 && searchTerm.length < 2 && (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Digite pelo menos 2 caracteres para buscar
              </div>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default GlobalSearch;