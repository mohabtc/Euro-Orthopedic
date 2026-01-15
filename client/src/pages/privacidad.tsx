export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white py-32 md:py-36 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-euro-text mb-12 tracking-[-0.02em] leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]" data-testid="text-title">
          Política de Privacidad
        </h1>

        <div className="legal-content prose prose-lg max-w-none text-euro-text/70 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-responsable">1. Responsable del Tratamiento</h2>
            <p>
              Euro Orthopedic, con domicilio en Madrid, España, es el responsable del tratamiento de los datos personales 
              que nos proporciones a través de nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-datos">2. Datos que Recopilamos</h2>
            <p>
              Recopilamos la siguiente información cuando solicitas una llamada:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Fecha y hora de la solicitud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-finalidad">3. Finalidad del Tratamiento</h2>
            <p>
              Utilizamos tus datos personales para:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Contactarte telefónicamente según tu solicitud</li>
              <li>Proporcionarte información sobre nuestros productos</li>
              <li>Gestionar tu potencial adquisición del producto</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-derechos">4. Tus Derechos</h2>
            <p>
              Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerte al mismo y solicitar 
              la portabilidad de tus datos. Para ejercer estos derechos, contacta con nosotros en info@euroorthopedic.com.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-conservacion">5. Conservación de Datos</h2>
            <p>
              Conservaremos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados 
              y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-seguridad">6. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales 
              contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-cookies">7. Cookies</h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. No utilizamos cookies 
              de terceros ni de seguimiento publicitario.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-euro-text mb-6" data-testid="text-section-contacto">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política de privacidad, puedes contactarnos en:
            </p>
            <p className="font-semibold text-euro-text text-lg">
              Email: info@euroorthopedic.com<br />
              Teléfono: +34 900 123 456
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
