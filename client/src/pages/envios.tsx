export default function EnviosPage() {
  return (
    <div className="min-h-screen bg-white py-32 md:py-36 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-euro-text mb-12 tracking-[-0.02em] leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]" data-testid="text-title">
          Política de Envíos y Devoluciones
        </h1>

        <div className="legal-content prose prose-lg max-w-none text-euro-text/70 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-envios">1. Política de Envíos</h2>
            <p>
              En Euro Orthopedic nos comprometemos a entregar tu OrthoCarbon Pro I en las mejores condiciones 
              y en el menor tiempo posible.
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li><strong>Envío gratuito</strong> a toda España peninsular</li>
              <li><strong>Plazo de entrega:</strong> 7-10 días laborables desde la confirmación del pedido</li>
              <li><strong>Entrega en domicilio</strong> con servicio de mensajería especializado</li>
              <li><strong>Montaje y demostración</strong> incluidos en el servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-seguimiento">2. Seguimiento del Envío</h2>
            <p>
              Una vez procesado tu pedido, recibirás:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Confirmación de pedido por email</li>
              <li>Número de seguimiento cuando el producto salga de nuestro almacén</li>
              <li>Contacto telefónico 24h antes de la entrega para coordinar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-recepcion">3. Recepción del Producto</h2>
            <p>
              Al recibir tu OrthoCarbon Pro I:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Verifica el estado del embalaje antes de firmar la entrega</li>
              <li>Si observas daños, hazlo constar en el albarán de entrega</li>
              <li>Nuestro técnico realizará una demostración completa del producto</li>
              <li>Recibirás toda la documentación y certificados de garantía</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-derecho">4. Derecho de Desistimiento</h2>
            <p>
              Dispones de 14 días naturales desde la recepción del producto para ejercer tu derecho de desistimiento, 
              sin necesidad de justificación.
            </p>
            <p className="mt-4">
              Para ejercer este derecho:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Contacta con nosotros en info@euroorthopedic.com o +34 900 123 456</li>
              <li>El producto debe estar en perfectas condiciones, con su embalaje original</li>
              <li>Organizaremos la recogida sin coste adicional</li>
              <li>Reembolsaremos el importe en un plazo máximo de 14 días</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-devoluciones">5. Devoluciones por Defecto</h2>
            <p>
              Si el producto presenta algún defecto de fabricación:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Contacta inmediatamente con nuestro servicio técnico</li>
              <li>Evaluaremos si procede reparación o sustitución</li>
              <li>El servicio de recogida y entrega será sin coste</li>
              <li>Garantizamos una solución en menos de 48 horas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-garantia">6. Servicio de Garantía</h2>
            <p>
              Durante el periodo de garantía de 2 años:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Servicio técnico prioritario</li>
              <li>Reparaciones cubiertas por garantía sin coste</li>
              <li>Producto de sustitución durante el periodo de reparación si fuera necesario</li>
              <li>Atención telefónica especializada 24/7</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-internacional">7. Envíos Internacionales</h2>
            <p>
              Para envíos fuera de España peninsular (Islas Baleares, Canarias, Ceuta, Melilla o internacional):
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Contacta con nuestro equipo para condiciones específicas</li>
              <li>Se aplicarán tarifas especiales según destino</li>
              <li>Plazos de entrega variables según ubicación</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-contacto">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre envíos o devoluciones:
            </p>
            <p className="font-semibold text-euro-text text-lg">
              Email: info@euroorthopedic.com<br />
              Teléfono: +34 900 123 456<br />
              Horario: Lunes a Viernes, 9:00 - 18:00h
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
