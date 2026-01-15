import { Button } from "@/components/ui/button";

interface FinanciacionPageProps {
  onContactClick: () => void;
}

export default function FinanciacionPage({ onContactClick }: FinanciacionPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 lg:pt-44 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-euro-text tracking-[-0.02em] leading-[1.05] mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]" data-testid="text-hero-title">
            Paga en 3 cuotas.<br />Cero intereses.<br />Cero bancos.
          </h1>

          <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]" data-testid="text-hero-description">
            Hemos eliminado toda la burocracia para ponértelo fácil. La financiación de 
            Euro Orthopedic es un acuerdo de confianza directo contigo, sin intermediarios 
            financieros ni letra pequeña.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 md:py-32 lg:py-40 bg-euro-bg-subtle">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text mb-20 md:mb-24 lg:mb-28 tracking-[-0.02em]" data-testid="text-how-title">
            Así funciona nuestro plan de pago:
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {/* Paso 1 */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <span className="text-4xl font-bold text-euro-blue">1</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-euro-text uppercase tracking-tight" data-testid="text-step-1-title">
                  Pago Inicial
                </h3>
                <div className="text-5xl md:text-6xl font-bold text-euro-blue" data-testid="text-step-1-percentage">
                  50%
                </div>
                <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-step-1-description">
                  Para confirmar tu pedido y poner en marcha el envío.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <span className="text-4xl font-bold text-euro-blue">2</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-euro-text uppercase tracking-tight" data-testid="text-step-2-title">
                  Cuota 2
                </h3>
                <div className="text-5xl md:text-6xl font-bold text-euro-blue" data-testid="text-step-2-percentage">
                  25%
                </div>
                <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-step-2-description">
                  A los 30 días de tu compra.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-euro-blue/10 mb-4">
                <span className="text-4xl font-bold text-euro-blue">3</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-euro-text uppercase tracking-tight" data-testid="text-step-3-title">
                  Cuota 3
                </h3>
                <div className="text-5xl md:text-6xl font-bold text-euro-blue" data-testid="text-step-3-percentage">
                  25%
                </div>
                <p className="text-lg text-euro-text/70 leading-relaxed" data-testid="text-step-3-description">
                  A los 60 días de tu compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sin comisiones */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-euro-text mb-12 md:mb-16 tracking-[-0.02em]" data-testid="text-transparent-title">
            Sin comisiones. Sin sorpresas.
          </h2>

          <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed" data-testid="text-transparent-description">
            Nuestro plan de 3 cuotas no tiene comisiones de apertura, ni de estudio, 
            ni intereses ocultos. El precio que ves es el precio que pagas. 
            Transparente y sencillo.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32 lg:py-40 bg-euro-bg-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-euro-text/70 leading-relaxed mb-12 md:mb-16" data-testid="text-cta-description">
            Para acogerte a este plan, simplemente menciónalo a nuestro especialista cuando te llame.
          </p>

          <Button
            onClick={onContactClick}
            className="bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full px-10 h-14 text-[18px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="financiacion-button-solicitar-llamada"
          >
            Solicitar mi llamada ahora
          </Button>
        </div>
      </section>
    </div>
  );
}
