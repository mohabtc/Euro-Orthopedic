import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Heart, Euro, FolderCheck, Check } from "lucide-react";

interface SolidaridadPageProps {
  onContactClick: () => void;
}

export default function SolidaridadPage({ onContactClick }: SolidaridadPageProps) {
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -80px 0px" };

    const createObserver = (setter: (value: boolean) => void) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setter(true);
        });
      }, observerOptions);
    };

    const observer2 = createObserver(setSection2Visible);
    const observer3 = createObserver(setSection3Visible);
    const observer4 = createObserver(setSection4Visible);

    if (section2Ref.current) observer2.observe(section2Ref.current);
    if (section3Ref.current) observer3.observe(section3Ref.current);
    if (section4Ref.current) observer4.observe(section4Ref.current);

    return () => {
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sección 1: Héroe (El Compromiso) */}
      <section className="relative pt-32 md:pt-36 lg:pt-44 pb-32 md:pb-40 lg:pb-48 bg-gradient-to-br from-euro-text to-euro-text/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8 md:space-y-10">
          <p className="text-[13px] uppercase tracking-[0.15em] font-semibold opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]" data-testid="text-pretitle">
            NUESTRO COMPROMISO
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.025em] leading-[1.05] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]" data-testid="text-hero-title">
            La libertad no debería<br />ser un lujo.
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-90 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]" data-testid="text-hero-description">
            En Euro Orthopedic, creemos que la dignidad y la independencia son derechos universales. 
            Nuestro Programa Solidario está diseñado para derribar las barreras económicas y hacer 
            accesible la mejor tecnología a quienes más la necesitan.
          </p>
        </div>
      </section>

      {/* Sección 2: La Ayuda (El "Qué") */}
      <section ref={section2Ref} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="aspect-square bg-euro-bg-subtle rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800" 
                  alt="Ayuda Solidaria" 
                  className="w-full h-full object-cover"
                  data-testid="image-ayuda"
                />
              </div>
            </div>

            <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-200 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text tracking-[-0.02em] leading-[1.05]" data-testid="text-ayuda-title">
                Una ayuda directa del 25%.
              </h2>

              <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid="text-ayuda-description">
                El Programa de Ayuda Solidaria consiste en un descuento directo y transparente del 
                25% sobre el precio final de la silla OrthoCarbon Pro I y sus accesorios principales. 
                Sin letra pequeña, sin comisiones ocultas. Es un compromiso firme para ayudar a las 
                familias a recuperar su movilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Requisitos (El "Quién") */}
      <section ref={section3Ref} className="py-32 md:py-40 lg:py-48 bg-euro-bg-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-20 md:mb-24 lg:mb-28 transition-all duration-1000 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text mb-8 tracking-[-0.02em]" data-testid="text-requisitos-title">
              Diseñado para quien más lo necesita.
            </h2>
            <p className="text-xl md:text-2xl text-euro-text/70 max-w-4xl mx-auto leading-relaxed" data-testid="text-requisitos-intro">
              Para asegurar que la ayuda llegue de forma justa, hemos establecido unos requisitos 
              claros basados en indicadores oficiales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Columna Izquierda: El Umbral Económico */}
            <div className={`transition-all duration-1000 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-euro-blue/10 mb-8">
                  <Euro className="w-8 h-8 text-euro-blue" data-testid="icon-euro" />
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-euro-text mb-6 tracking-[-0.02em]" data-testid="text-umbral-title">
                  Límite de Ingresos
                </h3>

                <p className="text-lg md:text-xl text-euro-text/70 leading-relaxed mb-8" data-testid="text-umbral-description">
                  Para acceder al programa, los ingresos brutos anuales de la unidad familiar no 
                  deben superar 3 veces el IPREM (Indicador Público de Renta de Efectos Múltiples).
                </p>

                <div className="bg-euro-blue/5 border-2 border-euro-blue/20 rounded-2xl p-6 mb-6">
                  <p className="text-sm text-euro-text/60 mb-2 font-medium" data-testid="text-limite-label">
                    Límite para 2025 (IPREM x3):
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-euro-blue" data-testid="text-limite-amount">
                    25.200 € <span className="text-2xl font-normal text-euro-text/60">brutos anuales</span>
                  </p>
                </div>

                <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-incremento">
                  Este límite se incrementará en 0.5 veces el IPREM (4.200 €) por cada miembro 
                  adicional en la unidad familiar (hijos o dependientes).
                </p>
              </div>
            </div>

            {/* Columna Derecha: La Documentación */}
            <div className={`transition-all duration-1000 delay-200 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-euro-blue/10 mb-8">
                  <FolderCheck className="w-8 h-8 text-euro-blue" data-testid="icon-folder" />
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-euro-text mb-6 tracking-[-0.02em]" data-testid="text-documentacion-title">
                  Documentación Requerida
                </h3>

                <p className="text-lg md:text-xl text-euro-text/70 leading-relaxed mb-8" data-testid="text-documentacion-intro">
                  Para validar la solicitud, nuestro equipo de asesores (de forma 100% confidencial) 
                  te guiará para presentar:
                </p>

                <ul className="space-y-5">
                  {[
                    "Certificado de discapacidad (≥33%)",
                    "Declaración de la RENTA (IRPF) más reciente",
                    "Certificado de empadronamiento colectivo"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-euro-blue shrink-0 mt-0.5" />
                      <span className="text-lg text-euro-text leading-relaxed" data-testid={`text-doc-${idx}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Proceso (El "Cómo") */}
      <section ref={section4Ref} className="py-32 md:py-40 lg:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-euro-text mb-20 md:mb-24 lg:mb-28 tracking-[-0.02em] transition-all duration-1000 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} data-testid="text-proceso-title">
            Un proceso sencillo y humano.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {/* Paso 1 */}
            <div className={`text-center space-y-6 transition-all duration-1000 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <Phone className="w-10 h-10 text-euro-blue" data-testid="icon-phone" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-euro-text" data-testid="text-paso-1-title">
                Contacta con nosotros
              </h3>

              <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-paso-1-description">
                Solicita tu llamada gratuita. Menciona a nuestro especialista tu interés en el 
                Programa Solidario. Te escucharemos sin prisas.
              </p>
            </div>

            {/* Paso 2 */}
            <div className={`text-center space-y-6 transition-all duration-1000 delay-200 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <Shield className="w-10 h-10 text-euro-blue" data-testid="icon-shield" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-euro-text" data-testid="text-paso-2-title">
                Validación Confidencial
              </h3>

              <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-paso-2-description">
                Te guiaremos para enviar los documentos de forma segura. Todo el proceso se trata 
                con la máxima confidencialidad y respeto.
              </p>
            </div>

            {/* Paso 3 */}
            <div className={`text-center space-y-6 transition-all duration-1000 delay-400 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <Heart className="w-10 h-10 text-euro-blue" data-testid="icon-heart" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-euro-text" data-testid="text-paso-3-title">
                Ayuda Aprobada
              </h3>

              <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-paso-3-description">
                Una vez validado, aplicamos tu 25% de descuento directamente. La libertad de 
                movimiento estará un paso más cerca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: CTA Final */}
      <section className="py-32 md:py-40 lg:py-48 bg-euro-blue text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]" data-testid="text-cta-title">
            Da el primer paso hoy.
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto opacity-90" data-testid="text-cta-description">
            Permítenos ayudarte. Solicita una llamada con nuestro equipo. Es 100% confidencial, 
            gratuita y sin ningún tipo de compromiso.
          </p>

          <Button
            onClick={onContactClick}
            className="bg-white text-euro-blue hover:bg-white/95 rounded-full px-10 h-14 text-[18px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="solidaridad-button-solicitar-llamada"
          >
            Solicitar llamada e informarme
          </Button>
        </div>
      </section>
    </div>
  );
}
