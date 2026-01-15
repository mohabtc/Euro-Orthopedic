import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <footer className="bg-euro-text text-white/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-20">
          <div>
            <h3 className="font-semibold text-white mb-7 text-[16px]" data-testid="text-footer-productos">Productos</h3>
            <ul className="space-y-5">
              <li>
                <Link href="/carbon" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-orthocarbon">
                  OrthoCarbon Pro I
                </Link>
              </li>
              <li>
                <Link href="/carbon" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-pack">
                  Pack Libertad Total
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 text-[16px]" data-testid="text-footer-empresa">La Empresa</h3>
            <ul className="space-y-5">
              <li>
                <button 
                  onClick={() => scrollToSection("philosophy")}
                  className="text-[15px] text-white/70 hover:text-white transition-all duration-300" 
                  data-testid="link-footer-filosofia"
                >
                  Nuestra Filosofía
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("recognition")}
                  className="text-[15px] text-white/70 hover:text-white transition-all duration-300" 
                  data-testid="link-footer-prensa"
                >
                  Prensa
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 text-[16px]" data-testid="text-footer-soporte">Soporte</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:info@euroorthopedic.com" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-contacto">
                  Contacto
                </a>
              </li>
              <li>
                <Link href="/envios" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-envios">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/financiacion" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-financiacion">
                  Financiación 3 Cuotas
                </Link>
              </li>
              <li>
                <Link href="/solidaridad" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-solidaridad">
                  Programa Solidario
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 text-[16px]" data-testid="text-footer-legal">Legal</h3>
            <ul className="space-y-5">
              <li>
                <Link href="/privacidad" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-privacidad">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-[15px] text-white/70 hover:text-white transition-all duration-300" data-testid="link-footer-terminos">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 transform" data-testid="link-social-facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 transform" data-testid="link-social-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 transform" data-testid="link-social-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 transform" data-testid="link-social-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-[14px] text-white/50">
            <p data-testid="text-footer-copyright">&copy; 2025 Euro Orthopedic. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
