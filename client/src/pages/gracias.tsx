import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GraciasPage() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-2xl w-full text-center space-y-10">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-euro-blue/10 mb-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
          <Check className="w-14 h-14 text-euro-blue" data-testid="icon-check" />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-euro-text tracking-[-0.02em] leading-[1.05] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]" data-testid="text-title">
          Todo listo{name ? `, ${name}` : ""}.
        </h1>

        <div className="space-y-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
          <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed max-w-2xl mx-auto" data-testid="text-confirmation">
            Hemos recibido tu solicitud. Un especialista te llamará en las próximas 24h desde nuestro número{" "}
            <span className="font-semibold text-euro-text">+34 900 123 456</span>.
          </p>

          <p className="text-lg md:text-xl text-euro-text/60" data-testid="text-save-number">
            Por favor, guárdalo en tus contactos.
          </p>

          <p className="text-xl md:text-2xl text-euro-text/80 font-semibold pt-6" data-testid="text-next-step">
            El primer paso hacia una nueva libertad ya está dado.
          </p>
        </div>

        <div className="pt-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="rounded-full px-10 h-12 text-[16px] font-medium shadow-md hover:shadow-lg transition-all duration-300"
            data-testid="button-volver-inicio"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
