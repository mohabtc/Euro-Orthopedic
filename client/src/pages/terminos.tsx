export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white py-32 md:py-36 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-euro-text mb-12 tracking-[-0.02em] leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]" data-testid="text-title">
          Términos y Condiciones
        </h1>

        <div className="legal-content prose prose-lg max-w-none text-euro-text/70 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-aceptacion">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones de uso. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-servicios">2. Descripción de Servicios</h2>
            <p>
              Euro Orthopedic proporciona información sobre productos de movilidad, específicamente la silla de ruedas 
              eléctrica OrthoCarbon Pro I. El servicio de solicitud de llamada es un medio de contacto inicial para 
              proporcionar información detallada y asesoramiento personalizado.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-uso">3. Uso del Sitio Web</h2>
            <p>
              Te comprometes a utilizar este sitio web únicamente para fines lícitos y de manera que no infrinja 
              los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-propiedad">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido incluido en este sitio web, incluyendo pero no limitado a texto, gráficos, logos, 
              imágenes, audio clips y software, es propiedad de Euro Orthopedic y está protegido por las leyes 
              de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-proceso">5. Proceso de Venta</h2>
            <p>
              La solicitud de llamada no constituye un compromiso de compra. El proceso de venta se formalizará 
              durante la conversación telefónica con nuestro especialista, quien proporcionará toda la información 
              sobre precios, condiciones de pago y entrega.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-pack">6. Pack Libertad Total</h2>
            <p>
              El Pack Libertad Total está sujeto a disponibilidad y puede variar según las condiciones de la promoción 
              vigente. Los detalles específicos serán confirmados por nuestro especialista durante la llamada telefónica.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-garantia">7. Garantía del Producto</h2>
            <p>
              La OrthoCarbon Pro I incluye 2 años de garantía del fabricante. Los términos específicos de la garantía 
              se proporcionarán con la documentación del producto. El chasis de fibra de carbono tiene garantía 
              extendida de 5 años.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-limitacion">8. Limitación de Responsabilidad</h2>
            <p>
              Euro Orthopedic no será responsable de ningún daño directo, indirecto, incidental, consecuente o punitivo 
              que resulte del acceso o uso de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-modificaciones">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-ley">10. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de España. 
              Cualquier disputa se someterá a la jurisdicción de los tribunales de Madrid.
            </p>
          </section>

          <p className="text-sm text-euro-grey pt-12 border-t border-euro-text/10 mt-12" data-testid="text-actualizacion">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </div>
  );
}
